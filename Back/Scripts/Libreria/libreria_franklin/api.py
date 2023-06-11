from rest_framework import viewsets, permissions
from rest_framework.generics import RetrieveUpdateAPIView
from .serializers import BookSerializer, AuthorSerializer, PublisherSerializer, GenreSerializer, SellSerializer, StoreSerializer, PaymentSerializer, DeliverySerializer, ProfileSerializer
from .models import Book, Author, Publisher, Genre, Sell, Store, Payment, Delivery, CustomUser
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
   permission_classes = [permissions.AllowAny]
   serializer_class = GenreSerializer     

class SellViewSet(viewsets.ModelViewSet):
   queryset = Sell.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = SellSerializer         

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

class ProfileViewSet(viewsets.ModelViewSet):
   queryset = CustomUser.objects.all()
   permission_classes = [permissions.AllowAny]
   serializer_class = ProfileSerializer


class ProfileView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated] #Solo usuarios logueados pueden ver.
    serializer_class = UserSerializer
    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)
    def perform_update(self, serializer):
        serializer.save()

class UserList(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get']
    permission_classes = [AllowAny]
    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)
        # if self.request.user.is_authenticated:
        #     return Response(serializer.data)