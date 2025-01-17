from core.test import abstrat_Test
from rest_framework import status
from django.urls import reverse
from .views import Get_competition_by_name,Get_Competitions_from_Country,Get_competitions
from .models import Competitions,Country
class Get_competitions_test(abstrat_Test):

    url_test = reverse("liveScorer:Get_competition_by_name", kwargs={"competition": "BBL",'id':0})
    test_data_id_filed_competition_none_url = reverse("liveScorer:Get_competition_by_name", kwargs={"competition": "none", 'id': 1})

    def setUp(self):
        cuntry=Country.objects.create(name="eng")
        Competitions.objects.create(name="BBL",short_name="BBL",popular=True,Country=cuntry)
        self.test_data_competition_filed_id_0_url = self.url_test

    def test_view_match(self):
        self.view_match(Get_competition_by_name)

    def test_data_competition_filed_id_0(self):
        response = self.client.get(self.test_data_competition_filed_id_0_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_data_id_filed_competition_none(self):
        response = self.client.get(self.test_data_id_filed_competition_none_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class Get_Competitions_from_Country_test(abstrat_Test):

    url_test = reverse("liveScorer:Get_Competitions_from_Country", kwargs={"country": "eng"})

    def setUp(self):
        Country.objects.create(name="eng")

    def test_view_match(self):
        self.view_match(Get_Competitions_from_Country)

    def test_data_match(self):
        self.data_match()

class Get_Competitions_from_Country_test(abstrat_Test):

    url_test = reverse("liveScorer:competitions")

    def setUp(self):
        cuntry = Country.objects.create(name="eng")
        Competitions.objects.create(name="BBL", short_name="BBL", popular=True, Country=cuntry)

    def test_view_match(self):
        self.view_match(Get_competitions)

    def test_data_match(self):
        self.data_match()
