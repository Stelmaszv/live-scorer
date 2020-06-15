from rest_framework import serializers
from .models import News
from liveScorer.models import Competitions
from rest_framework.serializers import  ModelSerializer
from liveScorer.serializers import Competitions_Serializer_get
from django.contrib.auth.models import User
class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model  = News
        fields =  ('id','title','photo','views','Competition','category','description','author','created')
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model  = User
        fields = ('id','username')
class NewsCategorySerializer(ModelSerializer):
    class Meta:
        model  = News
        fields =  ('id','title','photo','views','description')
class GetNewsSerializer(serializers.BaseSerializer):
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'title':instance.title,
            'photo': instance.photo.url,
            'views': instance.views,
            'Competition':self._get_serializer(Competitions_Serializer_get,instance.Competition),
            'author': self._get_serializer(UserSerializer, instance.author),
        }
    def _get_serializer(self,get_serializer,field,many=False):
        JSON = get_serializer(field,many=many)
        return JSON.data


