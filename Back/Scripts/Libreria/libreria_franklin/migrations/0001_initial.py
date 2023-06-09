# Generated by Django 4.2.1 on 2023-06-20 22:05

from django.conf import settings
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
            name='CustomUser',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('id_user', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=150, unique=True)),
                ('telephone_number', models.CharField(max_length=50)),
                ('telephone_area_code', models.CharField(max_length=50)),
                ('document', models.PositiveIntegerField(blank=True, null=True)),
                ('address_province', models.CharField(max_length=50)),
                ('address_location', models.CharField(max_length=50)),
                ('address_street', models.CharField(max_length=50)),
                ('postal_code', models.CharField(max_length=50)),
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
                ('id_book', models.AutoField(primary_key=True, serialize=False)),
                ('isbn', models.CharField(max_length=20)),
                ('title', models.CharField(max_length=200)),
                ('page_amount', models.PositiveIntegerField()),
                ('book_cover', models.CharField(max_length=500)),
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
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=150)),
                ('telephone_number', models.CharField(max_length=50)),
                ('telephone_area_code', models.CharField(max_length=50)),
                ('document', models.PositiveIntegerField(blank=True, null=True)),
                ('address_province', models.CharField(max_length=50)),
                ('address_location', models.CharField(max_length=50)),
                ('address_street', models.CharField(max_length=50)),
                ('postal_code', models.CharField(max_length=50)),
                ('status', models.CharField(max_length=50)),
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
                ('number', models.BigIntegerField()),
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
                ('id_sell', models.AutoField(primary_key=True, serialize=False)),
                ('saleDate', models.CharField(max_length=50)),
                ('deliveryType', models.CharField(max_length=50)),
                ('paymentType', models.CharField(max_length=50)),
                ('totalQuantity', models.IntegerField()),
                ('totalCost', models.DecimalField(decimal_places=2, max_digits=50)),
                ('books', models.ManyToManyField(null=True, to='libreria_franklin.book')),
                ('delivery', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='delivery', to='libreria_franklin.delivery')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
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
    ]
