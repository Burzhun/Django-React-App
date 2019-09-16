from rest_framework import serializers
from django.utils import dateformat
from .models import About, Project, Issue, SpecialProject, Document


class AboutSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = About
        fields = (
            'url',
        )


class DocumentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Document
        fields = (
            'title',
            'type',
            'file',
        )


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    documents = DocumentSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
                     'id',
                     'slug',
                     'name',
                     'description',
                     'description_full',
                     'info',
                     'screenshot',
                     'cover',
                     'logo',
                     'site',
                     'fb',
                     'vk',
                     'instagram',
                     'twitter',
                     'ok',
                     'youtube',
                     'rss',
                     'documents',
                 ] + ['counter_%s_value' % x for x in range(1, 4)] + ['counter_%s_title' % x for x in range(1, 4)]


class DetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Document
        fields = (
            'image',
            'text',
        )


class IssueSerializer(serializers.ModelSerializer):
    details = DetailSerializer(many=True, read_only=True)
    year = serializers.SerializerMethodField()
    month = serializers.SerializerMethodField()
    month_named = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()

    class Meta:
        model = Issue
        fields = (
            'id',
            'slug',
            'name',
            'date',
            'year',
            'month',
            'month_named',
            'number',
            'cover',
            'description',
            'details',
        )

    def get_year(self, instance):
        return dateformat.format(instance.date, 'Y')

    def get_month(self, instance):
        return dateformat.format(instance.date, 'm')

    def get_month_named(self, instance):
        return dateformat.format(instance.date, 'F')

    def get_name(self, instane):
        return instane.name or instane.project.name


class SpecialProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SpecialProject
        fields = (
            'url',
        )
