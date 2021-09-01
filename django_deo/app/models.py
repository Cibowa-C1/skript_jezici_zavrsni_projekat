from django.db import models

class Vinyl(models.Model):
    title = models.TextField()
    artist = models.TextField()
    label = models.TextField()

    def __str__(self):
        return self.title + ': ' + self.artist

class CD(models.Model):
    title = models.TextField()
    artist = models.TextField()

    def __str__(self):
        return self.title