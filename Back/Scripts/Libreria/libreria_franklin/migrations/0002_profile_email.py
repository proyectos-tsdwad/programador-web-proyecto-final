# Generated by Django 4.2.1 on 2023-06-04 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('libreria_franklin', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='email',
            field=models.EmailField(max_length=50, null=True),
        ),
    ]