from rest_framework import generics
from rest_framework.decorators import api_view
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])  # Ensures that the view accepts only GET requests
def get_company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GenericCompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class GenericVacancyList(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class GenericVacancyDetail(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class GenericCompanyVacancies(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['pk']
        return Vacancy.objects.filter(company_id=company_id)

    # def list(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     if not queryset.exists():
    #         return Response({'error': 'Vacancies for this company not found'}, status=status.HTTP_404_NOT_FOUND)
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response(serializer.data)


class GenericTopVacancies(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer
