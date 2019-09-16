#!/bin/bash -x

cp ./docker/.env.dev ./docker/.env

#. ./.env
export $(egrep -v '^#' ./docker/.env | xargs)

case $1 in
    up)
        docker-compose -f docker/docker-compose-dev.yml up --build -d
        ./dev.sh logs
    ;;
    down)
        docker-compose -f docker/docker-compose-dev.yml down -v
    ;;
    stop)
        docker-compose -f docker/docker-compose-dev.yml stop $2
    ;;
    start)
        docker-compose -f docker/docker-compose-dev.yml start $2
    ;;
    stop)
        docker-compose -f docker/docker-compose-dev.yml stop $2
    ;;
    restart)
        docker-compose -f docker/docker-compose-dev.yml restart $2
    ;;
    logs)
        docker-compose -f docker/docker-compose-dev.yml logs -f $2
    ;;
    bash)
        docker-compose -f docker/docker-compose-dev.yml exec $2 bash
    ;;
    exec)
        docker-compose -f docker/docker-compose-dev.yml exec $2 $3
    ;;
    importwp)
        docker-compose -f docker/docker-compose-dev.yml exec mysql sh -c 'mysql -e "CREATE DATABASE IF NOT EXISTS mostimes;"'
        docker-compose -f docker/docker-compose-dev.yml exec mysql sh -c 'mysql mostimes < wp.sql'
        docker-compose -f docker/docker-compose-dev.yml exec mysql sh -c 'mysql -e "SHOW DATABASES;"'
    ;;
esac
