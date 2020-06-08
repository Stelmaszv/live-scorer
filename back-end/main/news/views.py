from rest_framework import viewsets
from .models import News
from core.prototype_classes import API_prototype
from .serializers import NewsSerializer
class Top_News(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('-views')[:3]
    serializer_class = NewsSerializer
class Get_news_from_category(API_prototype):
    def set_query_set(self):
        self.queryset = News.objects.filter(category__name=self.kwargs.get('category')).order_by('-views')
class Get_news_from_category_all(Get_news_from_category):
    on_page=1
class Get_news_from_category_pages(Get_news_from_category_all):
    return_pages=True

