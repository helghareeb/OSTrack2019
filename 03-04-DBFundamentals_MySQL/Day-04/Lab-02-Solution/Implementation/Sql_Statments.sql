create database historyPlaces;
use historyPlaces;
create table users (user_id int,
					user_name varchar(50), 
					email varchar(20), 
					imageURL varchar(80),
					interests varchar(80),
					primary key (user_id)
);
create table mediaitems (med_id int,
					title varchar(50), 
					description varchar(20), 
					URL varchar(80),
					size varchar(50),
                    primary key (med_id)
);
create table views(med_id int, 
					user_id int,
                    tim time,
                    durnation varchar(50),
                    primary key (med_id, user_id,tim),
                    constraint users_fk1 foreign key (user_id) references users (user_id),
                    constraint media_fk1 foreign key (med_id) references mediaitems (med_id)
                    );
create table votes(med_id int, 
					user_id int,
                    rating varchar(50),
                    tim time,
					primary key (med_id, user_id),
                    constraint users_fk2 foreign key (user_id) references users (user_id),
                    constraint media_fk2 foreign key (med_id) references mediaitems (med_id)
);
create table places (place_id int,
						place_name varchar(50),
                        description varchar (50),
                        user_creator int,
                        pp_id int,
                        primary key (place_id),
                        constraint user_fk3 foreign key (user_creator) references users (user_id),
                        constraint place_fk1 foreign key (pp_id) references places (place_id)
);
create table visits (user_id int, 
					place_id int, 
                    tim time,
                    primary key (user_id, place_id),
                    constraint user_fk4 foreign key (user_id) references users (user_id),
					constraint place_fk2 foreign key (place_id) references places (place_id)
);
show tables;

create table submissions (user_id int,
							place_id int,
                            med_id int,
                            tim time,
                            primary key (user_id, place_id, med_id, tim),
                            constraint user_fk5  foreign key (user_id) references users (user_id),
							constraint place_fk3 foreign key (place_id) references places (place_id),
							constraint media_fk3 foreign key (med_id) references mediaitems (med_id)
);
create table audiofiles(med_id int,
						length int (255),
                        primary key (med_id),
                        constraint media_fk4 foreign key (med_id) references mediaitems (med_id)
);

create table imagefiles(med_id int,
						width int (255),
                        height int (255),
                        primary key (med_id),
                        constraint media_fk5 foreign key (med_id) references mediaitems (med_id)
);

create table category (category_id int,
						title varchar (50),
						description varchar (255),
                        pcid int,
                        primary key (category_id),
                        constraint category_fk1 foreign key (pcid) references category (category_id)
);       
create table keyword (keyword_id int,
						term varchar (30),
                        cid int,
                        primary key (keyword_id),
                        constraint category_fk2 foreign key (cid) references category (category_id)
);
create table keymedia (keyword_id int,
						med_id int,
                        primary key (keyword_id, med_id),
                        constraint keyword_fk1 foreign key (keyword_id) references keyword (keyword_id),
                        constraint media_fk6 foreign key (med_id) references mediaitems (med_id)
);
show tables;
                    
                        
                        

 