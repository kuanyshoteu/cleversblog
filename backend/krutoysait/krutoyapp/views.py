from django.shortcuts import render
from django.http import JsonResponse
from .models import *

# Что здесь происходит?
def main(request):
    # Что здесь происходит?
    return render(request, "index.html", {})

def sign_in(request):
    return render(request, "sign_in.html", {})

def rabotay(request):
    print("Rabotaiu!!!")
    return render(request, "profile/profile.html", {})

# Что здесь происходит?
def privet(request):
    username = request.POST.get('username')
    mail = request.POST.get('mail')
    password1 = request.POST.get('password1')
    password2 = request.POST.get('password2')
   
    data = {
        'a':5,
        'b':6,
        'c': False,
        'd': [1, 3, 'w'],
    }
    return JsonResponse(data)

def like(request):
    postid = int(request.POST.get('id'))
    post = Post.objects.get(id = 3)
    post.likes_number += 1
    post.save()
    print(post.likes_number)
    data = {
        'likes_number':post.likes_number
    }
    return JsonResponse(data)

def create_post(request):
    text = request.POST.get('text')
    ok = False
    if len(text) < 5:
        ok = True
    post = Post.objects.create(
        text = text,
        likes_number = 5,
        is_premium = False,
    )
    print(post)
    data = {
        'ok':ok
    }
    return JsonResponse(data)


def poka():
    a = 5