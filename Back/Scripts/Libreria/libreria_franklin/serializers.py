from ast import Store
from rest_framework import serializers
from .models import Book, Author, Publisher, Genre, Sell, Store, Payment, Delivery


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
    genres = GenreSerializer(read_only=True, many=True)

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
    genre_ids = serializers.PrimaryKeyRelatedField(
        queryset=Genre.objects.all(),
        source='genres',
        write_only=True,
        many=True
    )

    def update(self, instance, validated_data):
        author_id = validated_data.pop('author_id', None)
        publisher_id = validated_data.pop('publisher_id', None)
        genre_ids = validated_data.pop('genre_id', [])

        if author_id:
            instance.author_id = author_id.pk
        if publisher_id:
            instance.publisher_id = publisher_id.pk
         
        instance.genres.clear()
        
        for genre_id in genre_ids:
         genre = Genre.objects.get(pk=genre_id)
         instance.genres.add(genre)

        return super().update(instance, validated_data)
    class Meta:
        model = Book
        fields = '__all__' 

class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery
        fields = '__all__'
        read_only_fields = ('id_delivery', )   
        
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
    
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
