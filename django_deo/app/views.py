from django.shortcuts import render

from django.http import HttpResponse
from .models import Vinyl, CD
from django.views.generic import TemplateView

class VinylChartView(TemplateView):
    template_name = 'vinyl/chart.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["qs"] = Vinyl.objects.all()
        return context

class CDChartView(TemplateView):

    template_name = 'cd/chart.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["qs"] = CD.objects.all()
        return context
