from django.urls import path, include
from . import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register('news',views.Top_News)
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',include(router.urls)),
    path('Get_news_from_category/<str:category>/',views.Get_news_from_category.as_view(),name='news'),
    path('Get_news_from_category_all/<str:category>/',views.Get_news_from_category_all.as_view(),name='news'),
    path('Get_news_from_category_pages/<str:category>/',views.Get_news_from_category_pages.as_view(),name='news'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
