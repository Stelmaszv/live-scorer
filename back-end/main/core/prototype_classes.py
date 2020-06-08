from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from news.serializers import NewsSerializer,NewsCategorySerializer
class API_prototype(APIView):
    on_page=None
    def paginate(self, request, *args, **kwargs):
        if self.on_page is not None:
            page = request.GET.get('page', 1)
            paginator = Paginator(self.queryset, self.on_page)
            try:
                self.queryset = paginator.page(page)
            except PageNotAnInteger:
                self.queryset = paginator.page(1)
            except EmptyPage:
                self.queryset = paginator.page(paginator.num_pages)
    def set_query_set(self):
        pass
    def API_get(self, request, *args, **kwargs):
        serializer = NewsCategorySerializer(self.queryset, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    def get(self, request, *args, **kwargs):
        self.set_query_set()
        self.paginate(request)
        return self.API_get(request)