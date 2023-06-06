from django.core.management.base import BaseCommand
from libreria_franklin.models import Book, Author, Publisher, Genre, Store
import json
import os

class Command(BaseCommand):
    help = 'Insert default data if table is empty'

    def handle(self, *args, **options):

        
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

