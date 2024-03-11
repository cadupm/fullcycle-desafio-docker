use nodedb;

create table if not exists people (
  id int primary key auto_increment,
  `name` varchar(255) not null,
  primary key (id)
);