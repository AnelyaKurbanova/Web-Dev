from django.urls import path

from api.views import GenericCompanyList, GenericCompanyDetail, GenericVacancyList, \
    GenericVacancyDetail, GenericCompanyVacancies, GenericTopVacancies

app_name = 'api'
urlpatterns = [
    path('companies/', GenericCompanyList.as_view(), name='company_list'),
    path('companies/<int:pk>/', GenericCompanyDetail.as_view(), name='company_detail'),
    path('companies/<int:pk>/vacancies/', GenericCompanyVacancies.as_view(), name='company_vacancy_list'),
    path('vacancies/', GenericVacancyList.as_view(), name='vacancy_list'),
    path('vacancies/<int:pk>/', GenericVacancyDetail.as_view(), name='vacancy_detail'),
    path('vacancies/top_ten/', GenericTopVacancies.as_view(), name='top_ten_vacancies_list'),
]