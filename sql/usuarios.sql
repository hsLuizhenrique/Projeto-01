create DATABASE boxFront

create table Usuarios(
    id serial primary key,
    nome varchar(50) not null,
    email vachar(255) UNIQUE not null,
    senha varchar(50) not null
)