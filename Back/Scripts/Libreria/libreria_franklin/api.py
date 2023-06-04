from rest_framework import viewsets, permissions
from .serializers import BookSerializer, AuthorSerializer, PublisherSerializer, GenreSerializer, DeliverySerializer
from .models import Book, Author, Publisher, Genre, Delivery 


class BookViewSet(viewsets.ModelViewSet):
   queryset = Book.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = BookSerializer

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

class DeliveryViewSet(viewsets.ModelViewSet):
   queryset = Delivery.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = DeliverySerializer     