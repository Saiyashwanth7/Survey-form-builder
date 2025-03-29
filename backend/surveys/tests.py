from django.test import TestCase
from .models import Survey

class SurveyModelTest(TestCase):

    def setUp(self):
        Survey.objects.create(title="Test Survey", description="This is a test survey.")

    def test_survey_creation(self):
        survey = Survey.objects.get(title="Test Survey")
        self.assertEqual(survey.description, "This is a test survey.")

    def test_survey_str(self):
        survey = Survey.objects.get(title="Test Survey")
        self.assertEqual(str(survey), "Test Survey")