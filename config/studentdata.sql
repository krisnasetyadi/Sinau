CREATE DATABASE users;

CREATE TABLE student_data(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    student_name VARCHAR (50) NOT NULL,
    student_email VARCHAR (50) NOT NULL,
    student_password VARCHAR (250) NOT NULL,
    student_course VARCHAR (50) NOT NULL
    UNIQUE (email)
);

CREATE TABLE instructor_data(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    instructor_name VARCHAR (50) NOT NULL,
    instructor_email VARCHAR (50) NOT NULL,
    instructor_password VARCHAR (250) NOT NULL,
    instructor_course VARCHAR (50) NOT NULL
    UNIQUE (email)
);
CREATE TABLE checkout_data(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    student_name VARCHAR (50) NOT NULL,
    the_course VARCHAR (50) NOT NULL,
    
    UNIQUE (email)
);

