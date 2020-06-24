from rest_framework.authentication import BasicAuthentication
from django.contrib.auth import authenticate, get_user_model
class Authentication(BasicAuthentication):
    def authenticate(self, request):
        # Get the username and password
        username = request.data.get('username', None)
        password = request.data.get('password', None)

        credentials = {
            get_user_model().USERNAME_FIELD: username,
            'password': password
        }
        user = authenticate(**credentials)
        return (user, None)

