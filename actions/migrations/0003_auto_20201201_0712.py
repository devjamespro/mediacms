# Generated by Django 3.1.4 on 2020-12-01 07:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("actions", "0002_mediaaction_media"),
    ]

    operations = [
        migrations.AddField(
            model_name="mediaaction",
            name="user",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="useractions",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AddIndex(
            model_name="mediaaction",
            index=models.Index(
                fields=["user", "action", "-action_date"],
                name="actions_med_user_id_940054_idx",
            ),
        ),
        migrations.AddIndex(
            model_name="mediaaction",
            index=models.Index(
                fields=["session_key", "action"], name="actions_med_session_fac55a_idx"
            ),
        ),
    ]
