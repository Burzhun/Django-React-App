#!/bin/sh

until pg_isready -h $POSTGRES_HOST; do
  echo "Waiting for database start..."
  sleep 1
done

#cp .pgpass /root/.pgpass
#dropdb --host=postgres -U postgres yasnomedia
#createdb --host=postgres -U postgres yasnomedia

python manage.py makemigrations
python manage.py migrate
python manage.py loaddata fixtures.json
python manage.py loaddata main/fixtures/projects.json
python manage.py loaddata main/fixtures/issues.json
python manage.py runserver 0.0.0.0:8000
