from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin, SortableInlineAdminMixin
from solo.admin import SingletonModelAdmin
from .models import About, Project, Issue, SpecialProject, Document, IssueDetail


class CountersModelAdmin(admin.ModelAdmin):
    def get_fieldsets(self, request, obj=None):
        if self.fieldsets:
            return self.fieldsets

        fields = self.get_fields(request, obj)

        return [
            (None, {'fields': [x for x in fields if 'counter' not in x]}),
            ('Счетчики', {'fields': [x for x in fields if 'counter' in x]}),
        ]


# admin.site.register(About, SingletonModelAdmin)


# There is only one item in the table, you can get it this way:
# from .models import About
# config = About.objects.get()

# get_solo will create the item if it does not already exist
# config = About.get_solo()


@admin.register(About)
class AboutAdmin(SingletonModelAdmin, CountersModelAdmin):
    pass


class DocumentInline(admin.TabularInline):  # or admin.StackedInline
    extra = 3
    model = Document
    show_change_link = True


@admin.register(Project)
class ProjectsAdmin(SortableAdminMixin, CountersModelAdmin):
    inlines = (DocumentInline,)


class IssueDetailInline(SortableInlineAdminMixin, admin.TabularInline):  # or admin.StackedInline
    extra = 3
    model = IssueDetail
    show_change_link = True


@admin.register(Issue)
class IssueAdmin(admin.ModelAdmin):
    inlines = (IssueDetailInline,)
    list_filter = ('project', 'date')


@admin.register(SpecialProject)
class ProjectsAdmin(admin.ModelAdmin):
    pass
