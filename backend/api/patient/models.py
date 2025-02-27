from django.db import models

class Patient(models.Model):
	first_name = models.CharField(max_length=64)
	last_name = models.CharField(max_length=128)
	birth_year = models.IntegerField(null=True, blank=True)
	phone = models.CharField(max_length=16, null=True, blank=True)
	address = models.CharField(max_length=256, null=True, blank=True)

	def __str__(self):
		return str(self.id) + ' : ' + self.last_name + ' ' + self.first_name + ' | ' + str(self.phone)