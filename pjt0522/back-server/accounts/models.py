from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer
from django.contrib.auth import authenticate

# Create your models here.
class User(AbstractUser):
    pass
#이것만으로도 유저에 필요한 모든 필드 가져올 수 있음

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            user_serializer = UserSerializer(user)

            return Response({
                'token': token.key,
                'user': user_serializer.data  # Add user data to the response
            }, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_401_UNAUTHORIZED)