# Generated by Django 3.0.6 on 2020-06-15 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0009_news_competition'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
