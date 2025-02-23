from django.db import models

class Patient(models.Model):
	first_name = models.CharField(max_length=64)
	last_name = models.CharField(max_length=128)
	birth_date = models.DateField(null=True, blank=True)
	age = models.IntegerField()
	phone = models.CharField(max_length=16)
	address = models.CharField(max_length=256)

	def __str__(self):
		return self.last_name + ', ' + self.first_name