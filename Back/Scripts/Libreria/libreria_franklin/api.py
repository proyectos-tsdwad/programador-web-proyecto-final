from rest_framework import viewsets, permissions
from rest_framework.generics import RetrieveUpdateAPIView
from .serializers import BookSerializer, AuthorSerializer, PublisherSerializer, GenreSerializer, SellSerializer, StoreSerializer, PaymentSerializer, DeliverySerializer
from .models import Book, Author, Publisher, Genre, Sell, Store, Payment, Delivery



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
   serializer_class = GenreSerializer     

class SellViewSet(viewsets.ModelViewSet):
   queryset = Sell.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = GenreSerializer         

class DeliveryViewSet(viewsets.ModelViewSet):
   queryset = Delivery.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = DeliverySerializer     
   serializer_class = SellSerializer      
   
class StoreViewSet(viewsets.ModelViewSet):
    queryset =Store.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = StoreSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = PaymentSerializer
