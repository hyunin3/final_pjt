from django.db import models
# from django.contrib.auth.models import User
# from django.contrib.postgres.fields import ArrayField
from django.conf import settings

class Genre(models.Model):
    genre_id = models.IntegerField(unique=True)
    name = models.CharField(max_length=100)

class Movie(models.Model):
    movie_id = models.IntegerField(unique=True)
    title = models.CharField(max_length=200)
    released_date = models.DateField()
    popularity = models.FloatField()
    vote_avg = models.FloatField()
    overview = models.TextField()
    poster_path = models.CharField(max_length=200)
    genres = models.ManyToManyField(Genre)

    def __str__(self):
        return self.title

class Comment(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

