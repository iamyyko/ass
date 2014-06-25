drop table if exists user;
create table user(
	id integer primary key autoincrement,
	username string not null,
	password string not null
);

drop table if exists study;
create table study(
	id integer primary key autoincrement,
	title string not null,
	location string not null,
	test_type string not null,
	only_woman int not null,
	subject string not null,
	contents string not null
);
