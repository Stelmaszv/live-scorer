from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import resolve
import json
class abstrat_Test(APITestCase):
    many=True

    def json_match(self):
        serializer_data = self.Serializer(instance=self.instance.objects.all(), many=self.many).data
        response = self.client.get(self.url_test)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_data = json.loads(response.content)
        self.assertEqual(serializer_data, response_data)

    def data_match(self):
        response = self.client.get(self.url_test)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def view_match(self,view):
        self.assertEquals(resolve(self.url_test).func.view_class, view)