from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse,resolve
from .serializers import NewsSerializer,GetNewsSerializer
from .models import News
from .views import Get_News,login,Get_Top_News,Get_news_from_category
from django.contrib.auth.models import User
import json
class login_Test(APITestCase):
    list_url = reverse("news:login")
    def test_get_url(self):
        self.assertEquals(resolve(self.list_url).func.view_class,login)
    def test_url_no_login(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_url_login(self):
        self.user = User.objects.create_user(username="stelmaszv",
                                             password="123")
        data={
            'username':'stelmaszv',
            'password':'123'
        }
        response=self.client.post(self.list_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class Get_Top_News_Test(APITestCase):
    list_url = reverse("news:Get_top_news")
    def test_get_url(self):
        self.assertEquals(resolve(self.list_url).func.view_class,Get_Top_News)
    def test_json_match(self):
        serializer_data = NewsSerializer(instance=News.objects.all(),many=True).data
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_data = json.loads(response.content)
        self.assertEqual(serializer_data, response_data)
    def test_add_post(self):
        self.user = User.objects.create_user(username="stelmaszv",
                                             password="123")
        data={
            "title": "nowy post",
            "views": 999999999,
            "username": "stelmaszv",
            "password": "123"
        }
        response = self.client.post(self.list_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
class Get_News_test(APITestCase):
    get_url=reverse('news:Get', kwargs={"id": 1})
    def test_get_url(self):
        self.assertEquals(resolve(self.get_url).func.view_class, Get_News)
    def test_json_match(self):
        response = self.client.get(self.get_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
class Get_News_from_category_test(APITestCase):
    list_url=reverse('news:category_limit', kwargs={"category": "soccer"})
    def test_get_url(self):
        self.assertEquals(resolve(self.list_url).func.view_class, Get_news_from_category)






