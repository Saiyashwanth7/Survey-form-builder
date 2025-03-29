from django.urls import path
from surveys import views

urlpatterns = [
    path('surveys/', views.SurveyListView.as_view(), name='survey-list'),
    path('surveys/<int:pk>/', views.SurveyDetailView.as_view(), name='survey-detail'),
    path('surveys/create/', views.SurveyCreateView.as_view(), name='survey-create'),
    path('surveys/<int:pk>/edit/', views.SurveyUpdateView.as_view(), name='survey-edit'),
    path('surveys/<int:pk>/delete/', views.SurveyDeleteView.as_view(), name='survey-delete'),
]