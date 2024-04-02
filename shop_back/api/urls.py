from django.urls import path

from api.views import list_products, get_product, list_categories, get_category, list_products_by_category

app_name = 'api'
urlpatterns = [
    path('products/', list_products, name='list_products'),
    path('products/<int:product_id>/', get_product, name='get_product'), 
    path('categories/', list_categories, name='list_categories'),
    path('categories/<int:category_id>/', get_category, name='get_category'), 
    path('categories/<int:category_id>/products/', list_products_by_category, name='list_products_by_category'),
]