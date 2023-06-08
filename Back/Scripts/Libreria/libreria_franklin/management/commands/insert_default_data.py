from django.core.management.base import BaseCommand
from libreria_franklin.models import Book, Author, Publisher, Genre, Store
import json
import os

class Command(BaseCommand):
    help = 'Insert default data if table is empty'

    def handle(self, *args, **options):

        file_path = os.path.abspath('libreria_franklin/default data/publisher_data.json')
        if not Publisher.objects.exists():
            with open(file_path) as file:
                data = json.load(file)
            for publisher_data in data:
                name = publisher_data['name']
                Publisher.objects.create(name = name)
            self.stdout.write(self.style.SUCCESS('Default publishers inserted successfully.'))
        else:
            self.stdout.write('The Publisher table is not empty.')

        file_path = os.path.abspath('libreria_franklin/default data/author_data.json')
        if not Author.objects.exists():
            with open(file_path) as file:
                data = json.load(file)
            for author_data in data:
                name = author_data['name']
                Author.objects.create(name = name)
            self.stdout.write(self.style.SUCCESS('Default authors inserted successfully.'))
        else:
            self.stdout.write('The Author table is not empty.') 

        file_path = os.path.abspath('libreria_franklin/default data/genre_data.json')
        if not Genre.objects.exists():
            with open(file_path) as file:
                data = json.load(file)
            for genre_data in data:
                name = genre_data['name']
                Genre.objects.create(name = name)
            self.stdout.write(self.style.SUCCESS('Default genres inserted successfully.'))
        else:
            self.stdout.write('The Genre table is not empty.')

        file_path = os.path.abspath('libreria_franklin/default data/book_data.json')
        if not Book.objects.exists():
            with open(file_path, encoding='utf-8') as file:
                data = json.load(file)
            for book_data in data:
                isbn = book_data['isbn']
                title = book_data['title']
                pageAmount = book_data['pageAmount']
                book_cover = book_data['img']
                stock = book_data['stock']
                release_year = book_data['releaseDate']
                synopsis = book_data['sinopsis']
                price = book_data['price']
                tag = book_data['tags']
                author = Author.objects.get(id_author = book_data['authorId'])
                publisher = Publisher.objects.get(id_publisher = book_data['publisherId'])
                genres = Genre.objects.filter(id_genre__in = book_data['genres'])

                book  = Book.objects.create( isbn = isbn, title = title, page_amount = pageAmount, 
                                    book_cover = book_cover, stock= stock, release_year = release_year, 
                                    synopsis = synopsis, price = price, tags = tag, author = author, 
                                    publisher = publisher)
                book.genres.set(genres)
            self.stdout.write(self.style.SUCCESS('Default books inserted successfully.'))
        else:
            self.stdout.write('The Book table is not empty.')  


        
        file_path = os.path.abspath('libreria_franklin/default data/store_data.json')
        if not Store.objects.exists():
            with open(file_path, encoding='utf-8') as file:
                data = json.load(file)

            for store_data in data:
          
                street_number = store_data['street_number']
                province = store_data['province']
                locality = store_data['locality']
                telephone = store_data['telephone']
                        
                Store.objects.create( street_number = street_number, province = province, 
                                    locality = locality, telephone = telephone)

            self.stdout.write(self.style.SUCCESS('Default store inserted successfully.'))
        else:
            self.stdout.write('The Store tabe is not empty.')               

