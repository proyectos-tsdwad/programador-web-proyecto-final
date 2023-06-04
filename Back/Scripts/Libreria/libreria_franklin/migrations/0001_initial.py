# Generated by Django 4.2.1 on 2023-06-04 21:47

import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
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
                ('isbn', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=200)),
                ('page_amount', models.PositiveIntegerField()),
                ('book_cover', models.CharField(max_length=300)),
                ('stock', models.PositiveIntegerField(default=0)),
                ('release_year', models.PositiveSmallIntegerField()),
                ('synopsis', models.TextField(max_length=3000)),
                ('price', models.DecimalField(decimal_places=2, max_digits=50, max_length=200)),
                ('tags', models.CharField(max_length=300)),
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
            name='Store',
            fields=[
                ('id_store', models.AutoField(primary_key=True, serialize=False)),
                ('street_number', models.CharField(max_length=50)),
                ('province', models.CharField(max_length=30)),
                ('locality', models.CharField(max_length=30)),
                ('telephone', models.CharField(max_length=20)),
            ],
            options={
                'verbose_name': 'Store',
                'verbose_name_plural': 'Stores',
                'db_table': 'Store',
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
            name='genres',
            field=models.ManyToManyField(null=True, to='libreria_franklin.genre'),
        ),
        migrations.AddField(
            model_name='book',
            name='publisher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='publisher', to='libreria_franklin.publisher'),
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=150, unique=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]
