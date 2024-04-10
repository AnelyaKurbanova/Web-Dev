from django.urls import  path
from api.views import get_company_list, get_company_by_id,get_company_vacancies, get_vacancies_list, get_vacancy_by_id,get_vacancy_top_ten
app_name = 'api'
urlpatterns = [

    path('companies/', get_company_list, name = "get_company_list"),
    path('companies/<int:company_id>', get_company_by_id, name = "get_company_by_id"),
    path('companies/<int:company_id>/vacancies', get_company_vacancies, name = "get_company_vacancies"),
    path('vacancies/', get_vacancies_list, name = "get_vacancies_list"),
    path('vacancies/<int:vacancy_id>', get_vacancy_by_id, name = "get_vacancy_by_id"),
    path('vacancies/top_ten', get_vacancy_top_ten, name = "get_vacancy_top_ten"),
         
]