from rest_framework import viewsets
from .models import Competitions
from .serializers import Competitions_Serializer
class Get_competitions(viewsets.ModelViewSet):
    queryset = Competitions.objects.all()
    serializer_class = Competitions_Serializer
