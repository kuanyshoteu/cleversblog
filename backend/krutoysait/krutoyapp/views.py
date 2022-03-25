from django.shortcuts import render
from django.http import JsonResponse


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
    # Что здесь происходит?
    print(request.POST.get('username'))
    return JsonResponse({})