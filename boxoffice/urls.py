from django.urls import path
from django.views.generic.base import TemplateView
from boxoffice import views

urlpatterns = [
    path('daily/', TemplateView.as_view(template_name='index.html'), name='daily'),
    path('weekly/', TemplateView.as_view(template_name='weekly.html'), name='weekly'),
    path('<int:movieCd>/detail/', views.get_movieInfo, name='detail'),
]
