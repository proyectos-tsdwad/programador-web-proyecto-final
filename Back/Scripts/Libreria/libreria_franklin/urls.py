from rest_framework import routers
from .api import BookViewSet, AuthorViewSet, PublisherViewSet, GenreViewSet,SellViewSet, StoreViewSet, PaymentViewSet

router = routers.DefaultRouter()

router.register('api/v1/books', BookViewSet, 'books')
router.register('api/v1/authors', AuthorViewSet, 'authors')
router.register('api/v1/publishers', PublisherViewSet, 'publishers')
router.register('api/v1/genres', GenreViewSet, 'genres')
router.register('api/v1/sells', SellViewSet, 'Sells')
router.register("api/v1/store",StoreViewSet,"stores")
router.register("api/v1/payments",PaymentViewSet,"payments")

urlpatterns = router.urls