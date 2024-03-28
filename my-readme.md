sudo docker build -t node-sqlite-app-demo .

// sudo docker run -it --rm -p 8080:8080 node-sqlite-app-demo 

// sudo docker run -p 8080:8080 node-sqlite-app-demo

sudo docker container create --name my-app -it node-sqlite-app-demo /bin/sh

sudo docker container start -i my-app

clean up :

sudo docker image ls 

sudo docker ps --filter status=exited -q | xargs docker rm

sudo docker images -f "dangling=true" -q | xargs sudo docker rmi

stop :

sudo docker stop <container_name/id>

codium :

ctrl + ` // toggle terminal


references :

https://www.youtube.com/watch?v=cT_ZYrS3tKc&t=41s  // Build a Shopping Cart with Javascript


express js :

https://dev.to/darkmavis1980/how-to-use-es-modules-with-nodejs-4ncn

https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/

nodemon :

https://medium.com/@Evelyn.Taylor/troubleshooting-the-nodemon-command-not-recognized-error-in-node-js-d46bbd1a028d

web components:

https://kinsta.com/blog/web-components/

websocket :

https://github.com/websockets/ws?tab=readme-ov-file#installing

https://dev.to/codesphere/getting-started-with-web-sockets-in-nodejs-49n0

docker : 

https://dockerize.io/guides/node-express-guide

https://kinsta.com/blog/docker-remove-images/

https://docs.docker.com/engine/reference/commandline/container_rm/

https://www.ibm.com/docs/zh/connect-direct/6.1.0?topic=container-stoprestart-procedure

https://merunasgrincalaitis.medium.com/sqlite-made-easy-a-quick-and-simple-introduction-for-beginners-using-node-js-9e5e8f7ba3ca

https://www.baeldung.com/linux/docker-container-add-volume
