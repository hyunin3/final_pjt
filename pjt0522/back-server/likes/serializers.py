# serializers.py
from rest_framework import serializers
from .models import Content, Like
class ContentSerializer(serializers.ModelSerializer):
    total_likes = serializers.IntegerField(read_only=True) 

    class Meta:
        model = Content
        fields = ('id', 'total_likes')

    def get_total_likes(self, obj):
        return obj.like_set.count()

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('id', 'user', 'content', 'created_at')