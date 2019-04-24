from django.urls import path
from . import views
urlpatterns = [
	path('memAppStuff/', views.post_req, name = 'memapp-post_req'),
]
