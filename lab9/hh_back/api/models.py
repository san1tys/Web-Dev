from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    city = models.CharField(max_length=255)
    address = models.TextField(max_length=255)

    def __str__(self):
        return self.name

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return self.name