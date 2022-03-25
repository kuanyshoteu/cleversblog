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
    path(r'api/sign_in/', privet),

#    http://127.0.0.1:8000/home/
]
