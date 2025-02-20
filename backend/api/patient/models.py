from django.db import models

class Patient(models.Model):
	first_name = models.CharField(max_length=64)
	last_name = models.CharField(max_length=128)
	birth_date = models.DateField()
	age = models.IntegerField()
	phone_number = models.CharField(max_length=16)