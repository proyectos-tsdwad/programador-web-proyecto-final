from rest_framework import routers
from .api import BookViewSet, AuthorViewSet, PublisherViewSet, GenreViewSet, DeliveryViewSet

router = routers.DefaultRouter()

router.register('api/books', BookViewSet, 'books')
router.register('api/authors', AuthorViewSet, 'authors')
router.register('api/publishers', PublisherViewSet, 'publishers')
router.register('api/genres', GenreViewSet, 'genres')
router.register('api/deliverys', DeliveryViewSet, 'deliverys')

urlpatterns = router.urls