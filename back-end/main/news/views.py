from rest_framework import viewsets
from .models import News
from core.prototype_classes import API_prototype
from .serializers import NewsSerializer,GetNewsSerializer
class Get_Top_News(API_prototype):
    serializer_class = NewsSerializer
    def set_query_set(self):
        self.queryset = News.objects.all()[:3]
class Get_News(API_prototype):
    serializer_class = GetNewsSerializer
    many=False
    def set_query_set(self):
        self.queryset = News.objects.get(id=self.kwargs.get('id'))
class Get_news_from_category(API_prototype):
    serializer_class = NewsSerializer
    def set_query_set(self):
        self.queryset = News.objects.filter(category__name=self.kwargs.get('category')).order_by('-views')[:7]
class Get_news_from_category_all(Get_news_from_category):
    on_page=30
    def set_query_set(self):
        self.queryset = News.objects.filter(category__name=self.kwargs.get('category')).order_by('-views')
class Get_news_from_competitions(API_prototype):
    on_page=30
    serializer_class = NewsSerializer
    def set_query_set(self):
        self.queryset = News.objects.filter(Competition__name=self.kwargs.get('competition'))
class Get_news_from_competitions_pages(Get_news_from_competitions):
    return_pages=True
class Get_news_from_category_pages(Get_news_from_category_all):
    return_pages=True
class Get_top_news_in_Category(API_prototype):
    serializer_class=GetNewsSerializer
    def set_query_set(self):
        self.queryset = News.objects.filter(category__id=self.kwargs.get('category_id')).order_by('-views')
class Get_top_news_in_Competition(API_prototype):
    serializer_class=GetNewsSerializer
    def set_query_set(self):
        self.queryset = News.objects.filter(Competition__id=self.kwargs.get('competition_id')).order_by('-views')
