#!/bin/sh

cp .pgpass /root/.pgpass
chmod 600 /root/.pgpass
dropdb --host=postgres -U postgres yasnomedia
createdb --host=postgres -U postgres yasnomedia

python manage.py migrate --noinput --fake-initial || exit 1
python manage.py loaddata fixtures.json
python manage.py loaddata main/fixtures/projects.json
python manage.py loaddata main/fixtures/issues.json
uwsgi --ini /app/uwsgi.ini
