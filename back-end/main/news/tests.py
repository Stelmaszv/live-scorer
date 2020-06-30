from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse
from .serializers import NewsSerializer
from .models import News
import json
class login_Test(APITestCase):
    list_url = reverse("login")
    def test_url_no_login(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
class Get_Top_News_Test(APITestCase):
    list_url = reverse("Get_top_news")
    def test_url(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    def test_json_match(self):
        serializer_data = NewsSerializer(instance=News.objects.all(),many=True).data
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_data = json.loads(response.content)
        self.assertEqual(serializer_data, response_data)


