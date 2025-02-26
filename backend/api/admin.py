from django.contrib import admin

from .models import Patient
from .models import Examination

admin.site.register(Patient)
admin.site.register(Examination)