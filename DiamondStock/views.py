from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from DiamondStock.form import *
from django.contrib.auth.views import (
LogoutView, 
PasswordResetView, 
PasswordResetDoneView, 
PasswordResetConfirmView,
PasswordResetCompleteView
)

@login_required
def home(request):
    return render(request, "home.html")

def logins(request):
    next = request.GET.get('next')
    form = UserLoginForm(request.POST or None)
    template_name = 'accounts/login.html'

    if request.POST and not form.is_valid():
        messages.error(request, 'Please check the username and password')

    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect(next or '/')

    if request.user.is_authenticated:
        return redirect(next or '/')

    return render(request, template_name, {'form': form})

@login_required
def logout_view(request):
    logout(request)
    return redirect('/')

class CustomPasswordResetView(PasswordResetView):
    template_name = "accounts/password_reset.html"

    def get(self, request, *args, **kwargs):

        return super().get(request, *args, **kwargs)

class CustomPasswordResetDoneView(PasswordResetDoneView):
    template_name = "accounts/password_reset_done.html"

    def get(self, request, *args, **kwargs):

        return super().get(request, *args, **kwargs)
    
class CustomPasswordResetConfirmView(PasswordResetConfirmView):
    template_name = "accounts/password_reset_confirm.html"

    def get(self, request, *args, **kwargs):

        return super().get(request, *args, **kwargs)
    
class CustomPasswordResetCompleteView(PasswordResetCompleteView):
    template_name = "accounts/password_reset_complete.html"  # Default template

    def get(self, request, *args, **kwargs):

        return super().get(request, *args, **kwargs)
