from rest_framework import serializers
from .models import Competitions
class Competitions_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model  = Competitions
        fields =  ('id','name','popular')
