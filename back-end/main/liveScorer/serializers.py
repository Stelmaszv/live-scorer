from rest_framework import serializers
from .models import Competitions
class Competitions_Serializer_get(serializers.BaseSerializer):
    def to_representation(self, instance):
        return {
            'name': instance.name,
            'short_name':instance.short_name,
            'popular':instance.popular,
            'Country': instance.Country.name
        }
class Competitions_Serializer(serializers.ModelSerializer):
    class Meta:
        model  = Competitions
        fields =  ('id','name','popular','Country')
