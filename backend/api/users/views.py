from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializers import UserSerializers
# Create your views here.


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializers









