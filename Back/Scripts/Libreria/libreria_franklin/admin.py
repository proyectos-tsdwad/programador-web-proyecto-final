from django.contrib import admin
from .models import Author
from .models import Publisher
from .models import Genre
from .models import Book
from .models import Payment
from .models import Profile
from .models import Rol
from .models import Delivery

class AuthorAdmin(admin.ModelAdmin):
    list_display = ('id_author', 'name')
class PublisherAdmin(admin.ModelAdmin):
    list_display = ('id_publisher', 'name')
class GenreAdmin(admin.ModelAdmin):
    list_display = ('id_genre', 'name')
class BookAdmin(admin.ModelAdmin):
    list_display = ('isbn', 'title', 'pages', 'book_cover', 'stock', 'release_year', 'synopsis', 'price', 'id_author', 'id_publisher', 'id_genre')
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('id_payment', 'card_association', 'number', 'cvv', 'expiration')    
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('id_profile', 'name', 'last_name', 'telephone_number', 'telephone_area_code', 'document', 'address_province', 'address_location', 'password')
class DeliveryAdmin(admin.ModelAdmin):
    list_display = ('id_delivery', 'address')  
class RolAdmin(admin.ModelAdmin):
    list_display = ('id_rol', 'name')  

admin.site.register(Author, AuthorAdmin)
admin.site.register(Publisher, PublisherAdmin)
admin.site.register(Genre, GenreAdmin)
admin.site.register(Book, BookAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Payment, PaymentAdmin)
admin.site.register(Delivery, DeliveryAdmin)
admin.site.register(Rol, RolAdmin)