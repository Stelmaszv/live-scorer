from rest_framework import viewsets
from .models import Competitions
from .serializers import Competitions_Serializer_get,Competitions_Serializer
from core.prototype_classes import API_prototype,API_prototype_get
class Get_competitions(API_prototype):

    serializer_class = Competitions_Serializer

    def set_query_set(self,request):
        self.queryset = Competitions.objects.all()

class Get_competition_by_name(API_prototype_get):

    serializer_class = Competitions_Serializer_get
    many=False

    def set_query_set(self,request):
        if self.kwargs.get('competition') == 'none':
            self.queryset = Competitions.objects.get(id=self.kwargs.get('id'))
        else:
            self.queryset = Competitions.objects.get(name=self.kwargs.get('competition'))

class Get_Competitions_from_Country(API_prototype):

    serializer_class = Competitions_Serializer_get;

    def set_query_set(self,request):
        self.queryset = Competitions.objects.filter(Country__name=self.kwargs.get('country'))




