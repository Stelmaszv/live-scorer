# Generated by Django 3.0.6 on 2020-06-09 14:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('liveScorer', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='competitions',
            name='popular',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='competitions',
            name='Country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='Country', to='liveScorer.Country'),
        ),
    ]
