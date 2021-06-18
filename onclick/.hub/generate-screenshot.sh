docker-compose -f ./docker-compose.test.yml build # build image
docker-compose -f ./docker-compose.test.yml run app npx -y ts-node ./.hub/tests/generate-screenshots.ts # generate screenshot inside container
docker cp $(docker ps -a | grep 'front-end-exercise' | awk '{ print $1 }'):/usr/src/app/.hub/tests/solutions/solution.png ./tests/solutions/solution.png # copy screenshot to local
