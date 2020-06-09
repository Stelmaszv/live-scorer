from django.db import models
class Country(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return  self.name
class Competitions(models.Model):
    name = models.CharField(max_length=50)
    short_name = models.CharField(max_length=50,null=True,blank=True)
    popular = models.BooleanField(default=False)
    Country = models.ForeignKey(to='liveScorer.Country', on_delete=models.SET_NULL, null=True, blank=True,
                                 related_name='Country')
    def __str__(self):
        return  self.name