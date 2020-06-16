from rest_framework import serializers
from .models import News,Coments
from liveScorer.models import Competitions
from rest_framework.serializers import  ModelSerializer
from liveScorer.serializers import Competitions_Serializer_get
from django.contrib.auth.models import User
from django.core.paginator import Paginator
class abstract_base_serializer(serializers.BaseSerializer):
    def to_representation(self, instance):
        return {
        }
    def _get_serializer(self,get_serializer,field,many=False):
        JSON = get_serializer(field,many=many)
        return JSON.data
class ComentSerializer(abstract_base_serializer):
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'content': instance.content,
            'created': instance.created,
            'author': self._get_serializer(UserSerializer, instance.author),
        }
class GetNewsSerializer(abstract_base_serializer):
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'title':instance.title,
            'description':instance.description,
            'photo': instance.photo.url,
            'views': instance.views,
            'created': instance.created,
            'Competition':self._get_serializer(Competitions_Serializer_get,instance.Competition),
            'author': self._get_serializer(UserSerializer, instance.author),
        }
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


