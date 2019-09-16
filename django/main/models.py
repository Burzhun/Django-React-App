import os
import uuid
import shortuuid
from datetime import date
from django.db import models
from ckeditor.fields import RichTextField
from solo.models import SingletonModel
from django.utils import dateformat


def upload_to(instance, filename):
    ext = filename.split('.')[-1]
    filename = ("%s.%s" % (shortuuid.encode(uuid.uuid4()), ext)).lower()
    today = date.today()
    return os.path.join(instance._meta.model_name, '{y}/{m}/{d}/{filename}'.format(**{
        'y': today.year,
        'm': today.month,
        'd': today.day,
        'filename': filename
    }))


class CounterMixin(models.Model):
    counter_1_value = models.CharField(max_length=255, blank=True, null=True)
    counter_1_title = models.CharField(max_length=255, blank=True, null=True)
    counter_2_value = models.CharField(max_length=255, blank=True, null=True)
    counter_2_title = models.CharField(max_length=255, blank=True, null=True)
    counter_3_value = models.CharField(max_length=255, blank=True, null=True)
    counter_3_title = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        abstract = True


class About(CounterMixin, SingletonModel):
    text = RichTextField()

    class Meta(object):
        verbose_name = 'О нас'
        verbose_name_plural = 'О нас'

    def __str__(self):
        return 'О нас'


class Project(CounterMixin, models.Model):
    slug = models.CharField(max_length=255, db_index=True)
    name = models.CharField(max_length=255)
    description = RichTextField(blank=True, null=True)
    description_full = RichTextField(blank=True, null=True)
    info = RichTextField(blank=True, null=True)
    screenshot = models.ImageField(blank=True, null=True, upload_to=upload_to)
    cover = models.ImageField(blank=True, null=True, upload_to=upload_to)
    logo = models.ImageField(blank=True, null=True, upload_to=upload_to)
    site = models.URLField(blank=True, null=True)
    fb = models.URLField(blank=True, null=True)
    vk = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    ok = models.URLField(blank=True, null=True)
    youtube = models.URLField(blank=True, null=True)
    rss = models.URLField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0, blank=False, null=False)

    class Meta(object):
        verbose_name = 'проект'
        verbose_name_plural = 'проекты'
        ordering = ['order']

    def __str__(self):
        return self.name


class Document(models.Model):
    TYPES = (
        ('eps', 'EPS',),
        ('pdf', 'PDF',),
    )

    title = models.CharField(max_length=300)
    type = models.CharField(choices=TYPES, max_length=10)
    file = models.FileField(upload_to=upload_to)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='documents')


class Issue(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, default=3)
    slug = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateField(db_index=True)
    number = models.CharField(max_length=255, blank=True, null=True)
    cover = models.ImageField(blank=True, null=True, upload_to=upload_to)
    description = RichTextField(blank=True, null=True)

    class Meta(object):
        ordering = ['-date']
        verbose_name = 'выпуск'
        verbose_name_plural = 'выпуски'

    def __str__(self):
        return '%s' % self.name if self.name else '%s (%s)' % (self.project.name, dateformat.format(self.date, 'F Y'))


class IssueDetail(models.Model):
    image = models.ImageField(blank=True, null=True, upload_to=upload_to)
    text = models.TextField()
    issue = models.ForeignKey(Issue, on_delete=models.CASCADE, related_name='details')
    order = models.PositiveIntegerField(blank=True, null=True)

    class Meta(object):
        ordering = ['order']
    #     verbose_name = 'выпуск'
    #     verbose_name_plural = 'выпуски'


class SpecialProject(models.Model):
    class Meta(object):
        verbose_name = 'спецпроект'
        verbose_name_plural = 'спецпроекты'
