from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from rest_framework import routers
from .contrib.drf.routers import HybridRouter
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from main.views import UserViewSet
from main.views import AboutViewSet, ProjectViewSet, IssueViewSet, SpecialProjectViewSet

# router = HybridRouter()
router = routers.DefaultRouter()
# router.add_api_view('about', url('config', AboutView.as_view(), name='about'))
# router.register(r'about', AboutViewSet, basename='about')
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'issues', IssueViewSet, basename='issue')
router.register(r'special_projects', SpecialProjectViewSet, basename='special_project')

# print(router.urls)

urlpatterns = [
    path('admin-s3cr3t/', admin.site.urls),

    path('api/v1/', include(([
                                 path('', include(router.urls)),
                             ], 'yasnomedia'), namespace='v1')),
]
