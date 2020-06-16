from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
class CastumPaginator:
    def __init__(self,query,on_page,request):
        self._queryset=query;
        self._on_page=on_page;
        self._request=request
        self._page = request.GET.get('page', 1)
        self._setPage()
    def _setPage(self):
        paginator = Paginator(self._queryset, self._on_page)
        try:
            self._queryset = paginator.page(self._page)
        except PageNotAnInteger:
            self._queryset = paginator.page(1)
        except EmptyPage:
            self._queryset = paginator.page(paginator.num_pages)
        self._paginator_obj = paginator
    def return_query_set(self):
        return self._queryset
    def paginator_obj(self):
        return self._paginator_obj
    def return_page(self):
        return self._page
    def return_num_pages(self):
        return self._paginator_obj.num_pages
class API_prototype(APIView):
    on_page=None
    return_pages=False
    many=True
    def paginate(self, request, *args, **kwargs):
        if self.on_page is not None:
            paginator=CastumPaginator(self.queryset,self.on_page,request)
            self.queryset = paginator.return_query_set()
            self.paginator_obj = paginator
            self.page=paginator.return_page()
            self.num_pages=paginator.return_num_pages()
    def set_query_set(self,request):
        pass
    def _API_get(self, request, *args, **kwargs):
        serializer = self.serializer_class(self.queryset, many=self.many)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    def get(self, request, *args, **kwargs):
        self.set_query_set(request)
        self.paginate(request)
        return self.return_respanse(request)
    def return_respanse(self,request):
        if self.return_pages:
            return self._return_pages_json(request)
        return self._API_get(request)
    def _return_pages_json(self,request):
        pages={
            'valid':self._validPages(self.num_pages,int(self.page)),
            'max': self.num_pages,
            'page':int(self.page)
        }
        return Response(data=pages, status=status.HTTP_200_OK)
    def _validPages(self,max,page):
        if page > max:
            return False;
        return True
class API_prototype_get(APIView):
    def get(self, request, *args, **kwargs):
        self.set_query_set(request)
        return self.API_get(request)
    def API_get(self, request, *args, **kwargs):
        serializer = self.serializer_class(self.queryset)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    def set_query_set(self,request):
        pass

