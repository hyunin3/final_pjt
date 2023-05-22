from django.urls import path
from .views import LikeView, LikeCountView, LikeDetail
urlpatterns = [
    path('likes/', LikeView.as_view(), name='like'),
    path('likes/count/<int:content_id>/', LikeCountView.as_view(), name='like_count'),
    path('likes/<int:pk>/', LikeDetail.as_view(), name='like_detail'),
    
]
