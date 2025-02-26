from django.db import models

from ..models import Patient

class Examination(models.Model):
	date = models.DateField()
	patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
	diagnosis_note = models.TextField()
	prescription_note = models.TextField()

	def __str__(self):
		return self.patient.last_name + ' - ' + str(self.date)
