from rest_framework import viewsets
from .models import News
from .serializers import NewsSerializer,NewsCategorySerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView
class Top_News(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('-views')[:3]
    serializer_class = NewsSerializer
class Get_news_from_category(APIView):
    serializer_class = NewsSerializer
    def get(self, request, *args, **kwargs):
        serializer = NewsCategorySerializer(News.objects.filter(category__name=self.kwargs.get('category')), many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
