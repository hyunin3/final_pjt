# Create your models here.
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Content(models.Model):
    # content related fields
    def total_likes(self):
        return self.like_set.count()  # self.like_set는 이 컨텐트에 달린 Like 객체들을 의미합니다.

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

# Content는 좋아요를 받는 개체를 나타냅니다(예: 게시물, 이미지 등)