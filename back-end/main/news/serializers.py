from rest_framework import serializers
from .models import News
from rest_framework.serializers import  ModelSerializer
class NewsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model  = News
        fields =  ('id','title','photo','url','views')
class NewsCategorySerializer(ModelSerializer):
    class Meta:
        model  = News
        fields =  ('id','title','photo','views')