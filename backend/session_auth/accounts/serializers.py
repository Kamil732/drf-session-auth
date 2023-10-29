from rest_framework import serializers
from django.contrib.auth.models import User

from user_profiles.models import Profile


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username',)


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    def validate(self, data):
        if not(data['password'] == data['password2']):
            raise serializers.ValidationError(
                {'password': 'passwords are not the same'})

        return data

    class Meta:
        model = User
        fields = (
            'username',
            'password',
            'password2',
        )

    def create(self, data):
        username = data['username']
        password = data['password']

        user = User.objects.create_user(username=username, password=password)

        Profile.objects.create(user=user, first_name=username)

        return user
