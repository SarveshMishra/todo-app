from django.shortcuts import render
from rest_framework import generics
from users.serializers import TodoSerializers
from users.models import Todo
# Create your views here.

class TodoList(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializers







