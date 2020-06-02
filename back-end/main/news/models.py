from django.db import models
class News(models.Model):
    title = models.CharField(max_length=50)
    photo = models.FileField(upload_to='img', null=True, blank=True)
    views = models.IntegerField(default=0)
    def __str__(self):
        return  self.title
