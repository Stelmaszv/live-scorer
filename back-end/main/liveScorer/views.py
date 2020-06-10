from rest_framework import viewsets
from .models import Competitions
from .serializers import Competitions_Serializer
from core.prototype_classes import API_prototype
class Get_competitions(viewsets.ModelViewSet):
    queryset = Competitions.objects.all()
    serializer_class = Competitions_Serializer
class Get_competition_by_name(API_prototype):
    serializer_class = Competitions_Serializer
    many=False
    def set_query_set(self):
        self.queryset = Competitions.objects.get(name=self.kwargs.get('competition'))

