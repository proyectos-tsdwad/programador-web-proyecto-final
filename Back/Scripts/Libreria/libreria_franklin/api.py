from rest_framework import viewsets, permissions
from rest_framework.generics import RetrieveUpdateAPIView
from .serializers import BookSerializer, AuthorSerializer, PublisherSerializer, GenreSerializer, SellSerializer, StoreSerializer, PaymentSerializer, DeliverySerializer
from .models import Book, Author, Publisher, Genre, Sell, Store, Payment, Delivery
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status, generics

class LoginView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        # Recuperamos las credenciales y autenticamos al usuario
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)
        # Si es correcto añadimos a la request la información de sesión
        if user:
            login(request, user)
            return Response(
                UserSerializer(user).data,
                status=status.HTTP_200_OK)
        # Si no es correcto devolvemos un error en la petición
        return Response(
            status=status.HTTP_404_NOT_FOUND)


class LogoutView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        # Borramos de la request la información de sesión
        logout(request)

        # Devolvemos la respuesta al cliente
        return Response(status=status.HTTP_200_OK)
    
class SignupView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer


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
      
   
class StoreViewSet(viewsets.ModelViewSet):
    queryset =Store.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = StoreSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = PaymentSerializer
