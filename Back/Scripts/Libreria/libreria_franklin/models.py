from django.db import models

class Author(models.Model):
    id_author = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table = 'Author'
        verbose_name = 'Books Author'
        verbose_name_plural = 'Authors'
    def __unicode__(self):
        return self.name
    def __str__(self):
        return self.name
    
class Publisher(models.Model):
    id_publisher = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table = 'Publisher'
        verbose_name = 'Books Publisher'
        verbose_name_plural = 'Publishers'
    def __unicode__(self):
        return self.name
    def __str__(self):
        return self.name
    
class Genre(models.Model):
    id_genre = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table = 'Genre'
        verbose_name = 'Books Genre'
        verbose_name_plural = 'Genres'
    def __unicode__(self):
        return self.name
    def __str__(self):
        return self.name

class Book(models.Model):
    isbn = models.CharField(primary_key=True, max_length=13)
    title = models.CharField(max_length=50, blank=False)
    pages = models.PositiveIntegerField(max_length=100, blank=False)
    book_cover = models.CharField(max_length=100)
    stock= models.PositiveIntegerField(blank=False, default=0)
    release_year = models.PositiveSmallIntegerField(max_length=4, max_digits=4, blank=False)
    synopsis = models.TextField(max_length=1000, blank=False)
    price = models.DecimalField(max_length=100, decimal_places=2, max_digits=50,blank=False)
    id_author = models.ForeignKey(Author, to_field='id_author',related_name="author", on_delete=models.CASCADE)
    id_publisher = models.ForeignKey(Publisher, to_field='id_publisher',related_name="publisher", on_delete=models.CASCADE)
    id_genre = models.ForeignKey(Genre, to_field='id_genre',related_name="genre", on_delete=models.CASCADE)
    class Meta:
        db_table = 'Book'
        verbose_name = 'Book'
        verbose_name_plural = 'Books'
    def __unicode__(self):
        return self.isbn
    def __str__(self):
        return self.isbn