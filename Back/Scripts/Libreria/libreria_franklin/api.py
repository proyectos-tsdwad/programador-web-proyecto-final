from rest_framework import viewsets, permissions
from rest_framework.generics import RetrieveUpdateAPIView
from .serializers import BookSerializer, AuthorSerializer, PublisherSerializer, GenreSerializer
from .models import Book, Author, Publisher, Genre


class BookViewSet(viewsets.ModelViewSet, RetrieveUpdateAPIView):
   queryset = Book.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = BookSerializer
   lookup_field = 'isbn'

class AuthorViewSet(viewsets.ModelViewSet):
   queryset = Author.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = AuthorSerializer   

class PublisherViewSet(viewsets.ModelViewSet):
   queryset = Publisher.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = PublisherSerializer

class GenreViewSet(viewsets.ModelViewSet):
   queryset = Genre.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = GenreSerializer         