from django.urls import path, include
from . import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register('competitions',views.Get_competitions)
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',include(router.urls)),
    path('get_competition_by_name/<str:competition>',views.Get_competition_by_name.as_view(),name='get_competition_by_name'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
