from rest_framework import viewsets, permissions
from .serializers import BookSerializer, AuthorSerializer, PublisherSerializer, GenreSerializer, SellSerializer, StoreSerializer
from .models import Book, Author, Publisher, Genre, Sell, Store

  
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

class SellViewSet(viewsets.ModelViewSet):
   queryset = Sell.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = SellSerializer      
   
class StoreViewSet(viewsets.ModelViewSet):
    queryset =Store.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = StoreSerializer