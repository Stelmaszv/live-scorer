from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from news.serializers import NewsSerializer,NewsCategorySerializer
class API_prototype(APIView):
    on_page=None
    return_pages=False
    def paginate(self, request, *args, **kwargs):
        if self.on_page is not None:
            self.page = request.GET.get('page', 1)
            paginator = Paginator(self.queryset, self.on_page)
            try:
                self.queryset = paginator.page(self.page)
            except PageNotAnInteger:
                self.queryset = paginator.page(1)
            except EmptyPage:
                self.queryset = paginator.page(paginator.num_pages)
            self.paginator_obj=paginator
    def set_query_set(self):
        pass
    def _API_get(self, request, *args, **kwargs):
        serializer = NewsCategorySerializer(self.queryset, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    def get(self, request, *args, **kwargs):
        self.set_query_set()
        self.paginate(request)
        return self.return_respanse(request)
    def return_respanse(self,request):
        if self.return_pages:
            return self._return_pages_json(request)
        return self._API_get(request)
    def _return_pages_json(self,request):
        print(self.paginator_obj)
        pages={
            'valid':self._validPages(self.paginator_obj.num_pages,int(self.page)),
            'max': self.paginator_obj.num_pages,
            'page':int(self.page)
        }
        return Response(data=pages, status=status.HTTP_200_OK)
    def _validPages(self,max,page):
        if page > max:
            return False;
        return True

