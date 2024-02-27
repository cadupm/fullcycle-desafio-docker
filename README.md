# fullcycle-desafio-docker
1. Link da imagem Golang: https://hub.docker.com/r/cadupm/fullcycle

2. Entrar na pasta node e rodar npm install
  - Rodar o container do mysql separado para criar o database people;
  - CREATE TABLE people(id int, not null, auto_increment, name varchar(255), primary key(id));
  - Não quis subir a pasta mysql, uma vez que seria uma ideia de ambiente de desenvolvimento. Nem a node_modules pois juntas teriam 900+ files;
  - Não deixei a porta do aplicação node exposta para o localhost, uma vez que a ideia é utilizar o nginx para fazer o acesso. Expus só dentro do Dockerfile para o dockerhost.
