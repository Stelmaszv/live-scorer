# Generated by Django 3.0.6 on 2020-06-10 11:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('liveScorer', '0003_competitions_short_name'),
        ('news', '0008_auto_20200603_1248'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='Competition',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='compettion', to='liveScorer.Competitions'),
        ),
    ]
