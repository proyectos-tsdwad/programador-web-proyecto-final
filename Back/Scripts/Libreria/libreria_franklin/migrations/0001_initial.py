# Generated by Django 4.2.1 on 2023-05-30 22:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id_author', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Books Author',
                'verbose_name_plural': 'Authors',
                'db_table': 'Author',
            },
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('isbn', models.CharField(max_length=13, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('pages', models.PositiveIntegerField()),
                ('book_cover', models.CharField(max_length=100)),
                ('stock', models.PositiveIntegerField(default=0)),
                ('release_year', models.PositiveSmallIntegerField()),
                ('synopsis', models.TextField(max_length=1000)),
                ('price', models.DecimalField(decimal_places=2, max_digits=50, max_length=100)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='author', to='libreria_franklin.author')),
            ],
            options={
                'verbose_name': 'Book',
                'verbose_name_plural': 'Books',
                'db_table': 'Book',
            },
        ),
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id_delivery', models.AutoField(primary_key=True, serialize=False)),
                ('postal_code', models.PositiveIntegerField()),
                ('address', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Product sale delivery',
                'verbose_name_plural': 'Delivery',
                'db_table': 'Delivery',
            },
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id_genre', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Books Genre',
                'verbose_name_plural': 'Genres',
                'db_table': 'Genre',
            },
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id_payment', models.AutoField(primary_key=True, serialize=False)),
                ('card_association', models.IntegerField()),
                ('number', models.IntegerField()),
                ('cvv', models.IntegerField()),
                ('expiration', models.DateField()),
            ],
            options={
                'verbose_name': 'Payment',
                'verbose_name_plural': 'Payments',
                'db_table': 'Payment',
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id_profile', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('telephone_number', models.CharField(max_length=50)),
                ('telephone_area_code', models.CharField(max_length=50)),
                ('document', models.PositiveIntegerField()),
                ('address_province', models.CharField(max_length=50)),
                ('address_location', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Users profile',
                'verbose_name_plural': 'Profiles',
                'db_table': 'Profile',
            },
        ),
        migrations.CreateModel(
            name='Publisher',
            fields=[
                ('id_publisher', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Books Publisher',
                'verbose_name_plural': 'Publishers',
                'db_table': 'Publisher',
            },
        ),
        migrations.CreateModel(
            name='Rol',
            fields=[
                ('id_rol', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Rol',
                'verbose_name_plural': 'Rols',
                'db_table': 'Rol',
            },
        ),
        migrations.CreateModel(
            name='Sell',
            fields=[
                ('id_sell', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('orderNumber', models.IntegerField()),
                ('saleDate', models.DateField()),
                ('products', models.CharField(max_length=100)),
                ('deliveryType', models.CharField(max_length=50)),
                ('paymentType', models.CharField(max_length=50)),
                ('totalQuantity', models.DecimalField(decimal_places=2, max_digits=50)),
                ('totalCost', models.DecimalField(decimal_places=2, max_digits=50)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='book', to='libreria_franklin.book')),
                ('delivery', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='delivery', to='libreria_franklin.delivery')),
                ('payment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='payment', to='libreria_franklin.payment')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to='libreria_franklin.profile')),
            ],
            options={
                'verbose_name': 'Sell',
                'verbose_name_plural': 'Sells',
                'db_table': 'Sell',
            },
        ),
        migrations.AddField(
            model_name='book',
            name='genre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='genre', to='libreria_franklin.genre'),
        ),
        migrations.AddField(
            model_name='book',
            name='publisher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='publisher', to='libreria_franklin.publisher'),
        ),
    ]
