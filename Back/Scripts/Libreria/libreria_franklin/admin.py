from django.contrib import admin
from .models import Author
from .models import Publisher
from .models import Genre
from .models import Book

class AuthorAdmin(admin.ModelAdmin):
    list_display = ('id_author', 'name')
class PublisherAdmin(admin.ModelAdmin):
    list_display = ('id_publisher', 'name')
class GenreAdmin(admin.ModelAdmin):
    list_display = ('id_genre', 'name')
class BookAdmin(admin.ModelAdmin):
    list_display = ('isbn', 'title', 'pages', 'book_cover', 'stoc', 'release_year', 'synopsis', 'price', 'id_author', 'id_publisher', 'id_genre')
    
admin.site.register(Author, AuthorAdmin)
admin.site.register(Publisher, PublisherAdmin)
admin.site.register(Genre, GenreAdmin)