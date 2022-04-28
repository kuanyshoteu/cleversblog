# Generated by Django 4.0.3 on 2022-04-28 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('krutoyapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='age',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='profile',
            name='is_krutoi',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='profile',
            name='name',
            field=models.TextField(default='name'),
        ),
    ]