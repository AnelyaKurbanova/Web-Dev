from django.http import JsonResponse

from api.models import Product, Category


def list_products(request):
    products = Product.objects.all().values()
    return JsonResponse(list(products), safe=False)


def get_product(request, product_id):
    product = Product.objects.values().get(id=product_id)
    return JsonResponse(product)


def list_categories(request):
    categories = Category.objects.all().values()
    return JsonResponse(list(categories), safe=False)


def get_category(request, category_id):
    category = Category.objects.values().get(id=category_id) 
    return JsonResponse(category) 


def list_products_by_category(request, category_id):
    category = Product.objects.filter(category_id=category_id).values() if category_id else Product.objects.all().values() 
    return JsonResponse(list(category), safe=False) 