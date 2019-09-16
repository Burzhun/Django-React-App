from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from django_filters import rest_framework as filters
from .serializer import AboutSerializer, ProjectSerializer, SpecialProjectSerializer, IssueSerializer
from .models import About, Project, Issue, SpecialProject


# class AboutView(APIView):
#     permission_classes = []
#
#     def get(self, request, format=None):
#         """
#         Return site configuration key-values.
#         """
#         return Response({
#             'name': '123'
#         })

class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = AboutSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = ProjectSerializer
    lookup_field = 'slug'


class IssueFilter(filters.FilterSet):
    class Meta:
        model = Issue
        fields = {
            'date': ['year__exact'],
            'project__slug': ['exact'],
        }


class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = IssueSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = IssueFilter


class SpecialProjectViewSet(viewsets.ModelViewSet):
    queryset = SpecialProject.objects
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = SpecialProjectSerializer
