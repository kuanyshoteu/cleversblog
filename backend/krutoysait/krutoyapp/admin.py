from django.contrib import admin

from .models import *

class PostModelAdmin(admin.ModelAdmin):
    list_display = ["id", "text", "likes_number"]
    list_display_links = ["id", "text"]
    class Meta:
        model = Post

admin.site.register(Post, PostModelAdmin)


class ProfileModelAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "age"]
    list_display_links = ["id", "name"]
    class Meta:
        model = Profile

admin.site.register(Profile, ProfileModelAdmin)