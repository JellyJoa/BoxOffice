from django.db import models

# Create your models here.

class MovieList(models.Model):
    movieCd = models.IntegerField()
    movieNm = models.CharField(max_length=100)
    movieNmEn = models.CharField(max_length=100)
    prdtYear = models.IntegerField()
    typeNm = models.CharField(max_length=20)
    nationAlt = models.CharField(max_length=20)
    genreAlt = models.CharField(max_length=20)

    def __str__(self):
        return self.movieNm