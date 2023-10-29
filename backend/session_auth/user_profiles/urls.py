from django.urls import path

from . import views

urlpatterns = [
    path('', views.GetProfileAPIView.as_view()),
]
