# Generated by Django 4.2.1 on 2023-05-29 23:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('libreria_franklin', '0003_rename_id_author_book_author_and_more'),
    ]

    operations = [
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
    ]