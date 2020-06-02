from django.urls import path, include
from . import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register('news',views.Top_News)
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',include(router.urls)),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
