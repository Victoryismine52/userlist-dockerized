# customer-list-app-frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### To Build and Deploy Docker container
Install docker
build docker image by running 
```
docker build -t userlist/dockerize-vuejs-app .
```
Run docker container
```
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-2 userlist/dockerize-vuejs-app
```
visit http://localhost:8080/

