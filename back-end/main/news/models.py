from django.db import models
class News(models.Model):
    title = models.CharField(max_length=50)
    ontop = models.BooleanField(default=False)
    photo = models.FileField(upload_to='media', null=True, blank=True)
    def __str__(self):
        return  self.title
