from ast import Store
from rest_framework import serializers
from .models import Book, Author, Publisher, Genre, Sell, Store

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'
        read_only_fields = ('id_author', )       

class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = '__all__'
        read_only_fields = ('id_publisher', )

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'
        read_only_fields = ('id_genre', )                     

class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    publisher = PublisherSerializer(read_only=True)
    genre = GenreSerializer(read_only=True)

    author_id = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(),
        source='author',
        write_only=True
    )
    publisher_id = serializers.PrimaryKeyRelatedField(
        queryset=Publisher.objects.all(),
        source='publisher',
        write_only=True
    )
    genre_id = serializers.PrimaryKeyRelatedField(
        queryset=Genre.objects.all(),
        source='genre',
        write_only=True
    )

    def update(self, instance, validated_data):
        author_id = validated_data.pop('author_id', None)
        publisher_id = validated_data.pop('publisher_id', None)
        genre_id = validated_data.pop('genre_id', None)

        if author_id:
            instance.author_id = author_id.pk
        if publisher_id:
            instance.publisher_id = publisher_id.pk
        if genre_id:
            instance.genre_id = genre_id.pk

        return super().update(instance, validated_data)
    class Meta:
        model = Book
        fields = '__all__'

class SellSerializer(serializers.ModelSerializer):
    book = BookSerializer()
    class Meta:
        model = Sell
        fields = '__all__'
        
class StoreSerializer (serializers.ModelSerializer):
  class Meta:
    model = Store
    fields = "__all__"
    read_only_fields = ('id_store', )
    