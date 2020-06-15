from django.db import models
from django.contrib.auth.models import User
class Coments(models.Model):
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    content = models.TextField(null=True, blank=True);
    created = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    def __str__(self):
        return  self.content
class Category(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return  self.name
class News(models.Model):
    title = models.CharField(max_length=50)
    photo = models.FileField(upload_to='img', null=True, blank=True)
    views = models.IntegerField(default=0)
    Competition = models.ForeignKey(to='liveScorer.Competitions',on_delete=models.SET_NULL,null=True,blank=True,related_name='compettion')
    category = models.ForeignKey(to='news.Category',on_delete=models.SET_NULL,null=True,blank=True,related_name='category')
    description = models.TextField(null=True, blank=True);
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, blank=True,null=True)
    coments = models.ManyToManyField(Coments)
    def __str__(self):
        return  self.title
