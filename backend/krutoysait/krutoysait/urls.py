from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from krutoyapp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    # Что здесь происходит?
    # При вводе в адресную строку этой ссылки
    # вызывает эту функия
    path(r'', main),
    path(r'sign_in/', sign_in),
    path(r'api/sign_in/', create_user),
    path(r'api/create_post/', create_post),
    path(r'api/like/', like),
    path("__reload__/", include("django_browser_reload.urls")),
#    http://127.0.0.1:8000/home/
]
