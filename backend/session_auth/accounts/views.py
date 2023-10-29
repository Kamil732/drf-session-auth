from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView, GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status
from rest_framework.exceptions import APIException
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from django.contrib import auth
from django.contrib.auth.models import User

from . import serializers


class CheckAuthenticatedAPIView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        return Response({'isAuthenticated': request.user.is_authenticated})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})


@method_decorator(csrf_protect, name='dispatch')
class SignupAPIView(CreateAPIView):
    serializer_class = serializers.SignupSerializer


@method_decorator(csrf_protect, name='dispatch')
class LoginAPIView(APIView):
    def post(self, request, format=None):
        data = request.data

        username = data['username']
        password = data['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)

            return Response(serializers.AccountSerializer(user).data, status=status.HTTP_200_OK)
        raise APIException('Username or password is incorrect')


@method_decorator(csrf_protect, name='dispatch')
class LogoutAPIView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        auth.logout(request)

        return Response(status=status.HTTP_204_NO_CONTENT)
