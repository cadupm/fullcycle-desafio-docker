# fullcycle-desafio-docker
Desafio 1. 
  - Link da imagem Golang: https://hub.docker.com/r/cadupm/fullcycle

Desafio 2. 
  - Entrar na pasta node e baixar as dependencias com o npm install;
  - Rodar o container do mysql separado para criar o database people;
  - CREATE TABLE people(id int, not null, auto_increment, name varchar(255), primary key(id));
  - Não quis subir a pasta mysql, uma vez que seria uma ideia de ambiente de desenvolvimento, então estaria na raiz da minha aplicação e não no github;
  - Não subi a node_modules pois não seria uma boa prática;
  - Não deixei a porta do aplicação node exposta para a máquina, uma vez que a ideia é utilizar o nginx para fazer o acesso. Expus apenas para o Dockerhost, 
    configurando dentro do Dockerfile da pasta node.
