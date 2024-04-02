from django.db import models

# Create your models here.


class Category(models.Model): # все модели(таблица в бд) пишутся при помощи классов
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField() 
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    def __str__(self): # при выводе обьекта этого класса(таблдицы базы данных) в консоли выводится то что написано в return в данном случае это прсото name of product 
        return self.name