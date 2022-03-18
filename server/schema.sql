CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

create table rooms (
  id integer not null auto_increment,
  roomname varchar(100),
  primary key(id)
);

/*create table friends (
  id integer primary key,
  friend integer,
  friend_name varchar(30)
)
select * from users where friend = true
*/

create table users (
  id integer not null auto_increment,
  username varchar(100),
  friend boolean,
  primary key(id)
);

CREATE TABLE messages (
  id integer not null auto_increment,
  userid integer,
  text text,
  room integer,
  primary key(id),
  foreign key(room) references rooms(id),
  foreign key(userid) references users(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

insert into users values (1, 'flapjack', true);
insert into rooms values (1, 'ihop');
insert into messages values (1, 1, 'mmmm pancakes', 1);