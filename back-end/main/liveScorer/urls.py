from django.urls import path, include
from . import views
from rest_framework import routers
router = routers.DefaultRouter()
from django.conf import settings
from django.conf.urls.static import static
app_name = 'liveScorer'
urlpatterns = [
    path('',include(router.urls)),
    path('competitions/',views.Get_competitions.as_view(),name='competitions'),
    path('Get_competition_by_name/<str:competition>/<int:id>/',views.Get_competition_by_name.as_view(),name='Get_competition_by_name'),
    path('Get_Competitions_from_Country/<str:country>/',views.Get_Competitions_from_Country.as_view(),name='Get_Competitions_from_Country'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
