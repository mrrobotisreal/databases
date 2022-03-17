CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

create table rooms (
  id integer primary key,
  roomname varchar(30)
);

/*create table friends (
  id integer primary key,
  friend integer,
  friend_name varchar(30)
)
select * from users where friend = true
*/

create table users (
  id integer primary key,
  username varchar(30),
  friend boolean
);

CREATE TABLE messages (
  id integer primary key,
  userid integer,
  communication varchar(30),
  room integer,
  foreign key(room) references rooms(id),
  foreign key(userid) references users(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

