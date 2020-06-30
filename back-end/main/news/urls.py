from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('Get_top_news/',views.Get_Top_News.as_view(),name="Get_top_news"),
    path('Get_News/<int:id>/',views.Get_News.as_view(),name='top_news'),
    path('Get_news_from_category/<str:category>/',views.Get_news_from_category.as_view(),name='category_limit'),
    path('Get_news_from_category_all/<str:category>/',views.Get_news_from_category_all.as_view(),name='category_all'),
    path('Get_news_from_competitions/<str:competition>/',views.Get_news_from_competitions.as_view(),name='competition'),
    path('Get_news_from_category_pages/<str:category>/',views.Get_news_from_category_pages.as_view(),name='category_pages'),
    path('Get_news_from_competition_pages/<str:competition>/',views.Get_news_from_competitions_pages.as_view(),name='competition_pages'),
    path('Get_top_news_in_Category/<int:category_id>/',views.Get_top_news_in_Category.as_view(),name="top news in category"),
    path('Get_top_news_in_Competitions/<str:competition_name>/',views.Get_top_news_in_Competition.as_view(),name="top news in ccompetition"),
    path('Get_Coments/<int:news_id>/',views.Get_Coments.as_view(),name="Get Coments"),
    path('Get_Coments_pages/<int:news_id>/',views.Get_Coments_pages.as_view(),name="Get Coments pages"),
    path('login/',views.login.as_view(),name="login"),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
