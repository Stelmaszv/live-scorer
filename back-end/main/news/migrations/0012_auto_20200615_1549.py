# Generated by Django 3.0.6 on 2020-06-15 13:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('news', '0011_auto_20200615_1512'),
    ]

    operations = [
        migrations.CreateModel(
            name='Coments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(blank=True, null=True)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('author', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='news',
            name='coments',
            field=models.ManyToManyField(to='news.Coments'),
        ),
    ]