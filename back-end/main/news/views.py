from .models import News
from core.prototype_classes import API_prototype,API_prototype_get
from core.auth import Authentication
from .serializers import NewsSerializer,GetNewsSerializer,ComentsSerializer,UserSerializer
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
class login(API_prototype):

    authentication_classes = (SessionAuthentication, Authentication,)
    permission_classes = [IsAuthenticated]
    serializer_class=UserSerializer
    many = False

    def set_query_set(self,request):
        self.queryset = User.objects.get(id=request.user.id)

class Get_Top_News(API_prototype):

    serializer_class = NewsSerializer
    if_auth=True;

    def set_query_set(self,request):
        self.queryset = News.objects.all().order_by('-views')[:3]

class Get_News(API_prototype_get):

    serializer_class = GetNewsSerializer
    many=False

    def set_query_set(self,request):
        self.queryset = News.objects.get(id=self.kwargs.get('id'))

class Get_news_from_category(API_prototype):

    serializer_class = NewsSerializer

    def set_query_set(self,request):
        self.queryset = News.objects.filter(category__name=self.kwargs.get('category')).order_by('-views')[:7]

class Get_news_from_category_all(Get_news_from_category):

    on_page=20
    def set_query_set(self,request):
        self.queryset = News.objects.filter(category__name=self.kwargs.get('category')).order_by('-views')

class Get_news_from_competitions(API_prototype):

    on_page=30
    serializer_class = NewsSerializer
    def set_query_set(self,request):
        self.queryset = News.objects.filter(Competition__name=self.kwargs.get('competition'))

class Get_news_from_competitions_pages(Get_news_from_competitions):

    return_pages=True

class Get_news_from_category_pages(Get_news_from_category_all):

    return_pages=True

class Get_top_news_in_Category(API_prototype):

    serializer_class=GetNewsSerializer

    def set_query_set(self,request):
        self.queryset = News.objects.filter(category__id=self.kwargs.get('category_id')).order_by('-views')

class Get_top_news_in_Competition(API_prototype):

    serializer_class=NewsSerializer

    def set_query_set(self,request):
        self.queryset = News.objects.filter(Competition__name=self.kwargs.get('competition_name')).order_by('-views')

class Get_Coments(API_prototype):

    serializer_class=ComentsSerializer
    on_page=5

    def set_query_set(self,request):
        self.queryset=News.objects.get(id=self.kwargs.get('news_id')).coments.all()

class Get_Coments_pages(Get_Coments):

    return_pages=True


