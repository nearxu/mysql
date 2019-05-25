
### basic api

win install :https://www.runoob.com/mysql/mysql-install.html

tool navicat: https://www.navicat.com.cn/

### formate mysql

sudo docker ps

docker exct mysql5.6

show database

###  some basic docker 

from :https://www.runoob.com/docker/docker-hello-world.html

docker ps

sudo docker search mysql

sudo docker pull mysql:8.0

sudo docker images

sudo docker run --name mysql8.0 -p 3306 -e mysql_rrot_password=123 -d mysql:8.0

sudo docker exec -it mysql8.0 bash

### mysql8.0 and mysql5.6 not auth

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'foo123';
FLUSH PRIVILEGES;

### docker

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'foo123';
FLUSH PRIVILEGES;

