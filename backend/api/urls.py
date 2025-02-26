from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .patient.views import PatientViewSet
from .examination.views import ExaminationViewSet

router = DefaultRouter()

router.register(r'patients', PatientViewSet, 'patients')
router.register(r'examinations', ExaminationViewSet, 'examinations')

urlpatterns = [
	path('', include(router.urls))
]