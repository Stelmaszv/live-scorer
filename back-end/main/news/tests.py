from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse,resolve
from .serializers import NewsSerializer
from .models import News,Category
from liveScorer.models import Competitions
from .views import Get_News,\
    login,\
    Get_Top_News,\
    Get_news_from_category,\
    Get_news_from_category_all,\
    Get_news_from_competitions,\
    Get_news_from_category_pages,\
    Get_news_from_competitions_pages,\
    Get_top_news_in_Category,\
    Get_top_news_in_Competition,\
    Get_Coments,\
    Get_Coments_pages
from django.contrib.auth.models import User
from core.test import abstrat_Test
import json
class login_Test(APITestCase):
    list_url = reverse("news:login")

    def test_get_url(self):
        self.assertEquals(resolve(self.list_url).func.view_class,login)

    def test_url_no_login(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_url_login(self):
        self.user = User.objects.create_user(username="stelmaszv",password="123")
        data={
            'username':'stelmaszv',
            'password':'123'
        }
        response=self.client.post(self.list_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class Get_Top_News_Test(abstrat_Test):
    url_test = reverse("news:Get_top_news")
    instance=News
    Serializer=NewsSerializer;

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class,Get_Top_News)

    def test_json_match(self):
        self.json_match()

    def test_add_post(self):
        self.user = User.objects.create_user(username="stelmaszv",password="123")
        self.data={
            "title": "nowy post",
            "views": 999999999,
            "username": "stelmaszv",
            "password": "123"
        }
        response = self.client.post(self.url_test, self.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
class Get_News_test(abstrat_Test):
    url_test=reverse('news:Get', kwargs={"id": 1})

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_News)

    def test_json_match(self):
        News.objects.create(title="soccerfqef")
        response = self.client.get(self.url_test)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
class Get_News_from_category_test(abstrat_Test):
    url_test=reverse('news:category_limit', kwargs={"category": "soccer"})
    instance=News
    Serializer=NewsSerializer;

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_news_from_category)

    def test_json_match(self):
        self.json_match()
class Get_news_from_category_all_test(abstrat_Test):
    url_test = reverse('news:category_all', kwargs={"category": "soccer"})

    def setUp(self):
        News.objects.create(title="soccerfqef")

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_news_from_category_all)

    def test_json_match(self):
        self.data_match()
class Get_news_from_competitions_test(abstrat_Test):
    url_test = reverse('news:Get news competitions', kwargs={"competition": "BBL"})

    def setUp(self):
        Competitions.objects.create(name="BBL")

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_news_from_competitions)

    def test_json_match(self):
        self.data_match()

class Get_news_from_category_pages_pages_test(abstrat_Test):
    url_test = reverse('news:category_pages', kwargs={"category": "soccer"})

    def setUp(self):
        Competitions.objects.create(name="BBL")

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_news_from_category_pages)

    def test_json_match(self):
        self.data_match()

class Get_news_from_competitions_pages_test(abstrat_Test):
    url_test = reverse('news:competition_pages', kwargs={"competition": "BBL"})

    def setUp(self):
        Competitions.objects.create(name="BBL")

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_news_from_competitions_pages)

    def test_json_match(self):
        self.data_match()

class Get_top_news_in_Category_test(abstrat_Test):
    url_test = reverse('news:top news in category', kwargs={"category_id": 1})

    def setUp(self):
        Category.objects.create(name="soccer")

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_top_news_in_Category)

    def test_json_match(self):
        self.data_match()

class Get_top_news_in_Competition_test(abstrat_Test):
    url_test = reverse('news:top news in ccompetition', kwargs={"competition_name": "BBL"})

    def setUp(self):
        Competitions.objects.create(name="BBL")

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_top_news_in_Competition)

    def test_json_match(self):
        self.data_match()

class Get_Coments_test(abstrat_Test):

    url_test = reverse('news:Get Coments', kwargs={"news_id": "1"})
    def setUp(self):
        News.objects.create(title="soccerfqef")

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_Coments)

    def test_json_match(self):
        self.data_match()

class Get_Coments_pages_test(abstrat_Test):
    url_test = reverse('news:Get Coments pages', kwargs={"news_id": "1"})
    def setUp(self):
        News.objects.create(title="soccerfqef")

    def test_get_url(self):
        self.assertEquals(resolve(self.url_test).func.view_class, Get_Coments_pages)

    def test_json_match(self):
        self.data_match()





