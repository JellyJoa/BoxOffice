from django.urls import path
from django.views.generic.base import TemplateView

urlpatterns = [
    path('daily/', TemplateView.as_view(template_name='index.html'), name='daily'),
    path('weekly/', TemplateView.as_view(template_name='weekly.html'), name='weekly')
]
