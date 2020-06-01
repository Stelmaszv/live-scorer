from django.urls import path, include
from . import views
from rest_framework import routers
##glupota
router = routers.DefaultRouter()
router.register('news',views.Top_News)
urlpatterns = [
    path('',include(router.urls)),
]