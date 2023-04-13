CREATE TABLE usersQueues
(
    id          int NOT NULL AUTO_INCREMENT,
    first_name  varchar(25),
    last_name   varchar(15),
    email       varchar(50),
    status      ENUM ('new','ready','canceled','in_work','processed') NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id)
);
