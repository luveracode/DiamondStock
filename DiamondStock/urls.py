from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from DiamondStock.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/login/', logins, name='logins'),  # Consider using only one login URL
    path('accounts/logout/', logout_view, name='logout'),
    path('login/', login, name='login'),  # Ensure this is necessary if accounts/login/ exists
    path('', home, name='home'),

    # Password reset URLs
    path('password_reset/', CustomPasswordResetView.as_view(), name='password_reset'),
    path('password-reset/done/', CustomPasswordResetDoneView.as_view(), name='password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>/', CustomPasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('password-reset-complete/', CustomPasswordResetCompleteView.as_view(), name='password_reset_complete'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)