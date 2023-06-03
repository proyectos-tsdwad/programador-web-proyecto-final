from rest_framework import routers
from .api import BookViewSet, AuthorViewSet, PublisherViewSet, GenreViewSet,SellViewSet, StoreViewSet

router = routers.DefaultRouter()

router.register('api/books', BookViewSet, 'books')
router.register('api/authors', AuthorViewSet, 'authors')
router.register('api/publishers', PublisherViewSet, 'publishers')
router.register('api/genres', GenreViewSet, 'genres')
router.register('api/sells', SellViewSet, 'Sells')
router.register("api/store",StoreViewSet,"stores")

urlpatterns = router.urls