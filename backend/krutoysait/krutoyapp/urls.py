from django.urls import re_path as url
from .views import rabotay

app_name = 'krutoyapp'
urlpatterns = [
    url(r'', rabotay, name='change_url'),
]
