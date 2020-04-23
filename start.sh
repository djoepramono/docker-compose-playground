#!/bin/bash

trap "docker-compose down --volumes --remove-orphans" 0
docker-compose down --volumes --remove-orphans

docker-compose run --rm client bash