from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    city = models.CharField(max_length=30)
    address = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "companies"
        verbose_name = "company"


class Vacancy(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "vacancies"
        verbose_name = "vacancy"