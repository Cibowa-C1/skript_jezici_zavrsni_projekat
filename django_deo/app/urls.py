from django.contrib import admin
from django.urls import path
from .views import VinylChartView, CDChartView

app_name = 'app'
urlpatterns = [
    path('vinyl/', VinylChartView.as_view(), name='vinyl'),
    path('cd/', CDChartView.as_view(), name='cd'),
]
