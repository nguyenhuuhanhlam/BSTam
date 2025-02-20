from django.db import models

class Prescription(models.Model):
	patient = models.ForeignKey('Patient', on_delete=models.CASCADE)
	date = models.DateField()
	description = models.TextField()