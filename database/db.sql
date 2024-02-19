create database ContactApp;

use ContactApp;

create table contacts(
	id int primary key auto_increment,
	fname varchar(10),
	lname varchar(10),
	mobile varchar(15)
);

insert into contacts values(0, 'abc', 'xyz', '+919876543210' );
insert into contacts values(0, 'qwer', 'asdf', '+911234567890' );

