from django.urls import path

from . import views

urlpatterns = [
    path('', views.AccountListAPIView.as_view()),
    path('authenticated/', views.CheckAuthenticatedAPIView.as_view()),
    path('csrf_cookie/', views.GetCSRFToken.as_view()),
    path('signup/', views.SignupAPIView.as_view()),
    path('login/', views.LoginAPIView.as_view()),
    path('logout/', views.LogoutAPIView.as_view()),
    path('delete/', views.DeleteAccountAPIView.as_view()),
]
