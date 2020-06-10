from django.urls import path, include
from . import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register('news',views.Top_News)
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',include(router.urls)),
    path('Get_news_from_category/<str:category>/',views.Get_news_from_category.as_view(),name='category_limit'),
    path('Get_news_from_category_all/<str:category>/',views.Get_news_from_category_all.as_view(),name='category_all'),
    path('Get_news_from_competitions/<str:competition>/',views.Get_news_from_competitions.as_view(),name='competition'),
    path('Get_news_from_category_pages/<str:category>/',views.Get_news_from_category_pages.as_view(),name='category_pages'),
    path('Get_news_from_competition_pages/<str:competition>/',views.Get_news_from_competitions_pages.as_view(),name='competition_pages'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
