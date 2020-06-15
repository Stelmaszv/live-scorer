from django.db import models
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
    def __str__(self):
        return  self.title
