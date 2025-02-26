from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Examination
from .serializers import ExaminationSerializer

class ExaminationViewSet(viewsets.ModelViewSet):
	queryset = Examination.objects.all().order_by('date')
	serializer_class = ExaminationSerializer

	@action(detail=True, methods=['get'], url_path='by-patient')
	def get_examination(self, request, pk=None):
		queryset = self.queryset.filter(patient=pk)
		serializer = self.get_serializer(queryset, many=True)
		return Response(serializer.data)
