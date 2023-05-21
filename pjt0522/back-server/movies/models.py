from django.conf import settings
from django.db import models

class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    movie_id = models.IntegerField()
    content = models.TextField()

    # ... other fields and methods ...
