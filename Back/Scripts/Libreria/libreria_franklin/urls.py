from rest_framework import routers
from .api import BookViewSet, AuthorViewSet, PublisherViewSet, GenreViewSet,SellViewSet, StoreViewSet, PaymentViewSet, DeliveryViewSet


router = routers.DefaultRouter()

router.register('api/books', BookViewSet, 'books')
router.register('api/authors', AuthorViewSet, 'authors')
router.register('api/publishers', PublisherViewSet, 'publishers')
router.register('api/genres', GenreViewSet, 'genres')
router.register('api/deliverys', DeliveryViewSet, 'deliverys')
router.register('api/sells', SellViewSet, 'Sells')
router.register("api/store",StoreViewSet,"stores")
router.register("api/payments",PaymentViewSet,"payments")

urlpatterns = router.urls