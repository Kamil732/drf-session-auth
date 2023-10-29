from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response

from .models import Profile
from . import serializers


class GetProfileAPIView(RetrieveAPIView):
    serializer_class = serializers.UserProfileSerializer

    def get_object(self, *args, **kwargs):
        user = User.objects.get(id=self.request.user.id)

        return Profile.objects.get(user=user)
