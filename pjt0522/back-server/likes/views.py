from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import Like, Content
from .serializers import ContentSerializer, LikeSerializer
from django.http import JsonResponse
from django.views import View

class LikeView(APIView):
    def get(self, request):
        content_id = request.GET.get('content_id')
        if content_id is not None:
            likes = Like.objects.filter(content_id=content_id)
            return Response({"totalLikes": likes.count()})
        else:
            return Response({"detail": "content_id parameter is missing"}, status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request):
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LikeCountView(View):
    def get(self, request, content_id):
        count = Like.objects.filter(content_id=content_id).count()
        return JsonResponse({"count": count})
    

class LikeDetail(generics.RetrieveDestroyAPIView):  # 새로 추가
    queryset = Like.objects.all()
    serializer_class = LikeSerializer    