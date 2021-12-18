CREATE DATABASE lms;

CREATE TABLE student_data(
    student_id BIGSERIAL PRIMARY KEY NOT NULL,
    student_name VARCHAR (50) NOT NULL,
    student_email VARCHAR (50) NOT NULL,
    student_password VARCHAR (250) NOT NULL,
    student_course VARCHAR (50) NOT NULL,
    UNIQUE(student_email)
);
-- TEST INPUT
INSERT INTO student_data (student_name,student_email,student_password,student_course) VALUES ('bambang','bambang@gmail.com','password123','cobra');

CREATE TABLE instructor_data(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    instructor_name VARCHAR (50) NOT NULL,
    instructor_email VARCHAR (50) NOT NULL,
    instructor_password VARCHAR (250) NOT NULL,
    instructor_course VARCHAR (50) NOT NULL
    UNIQUE (email)
);


