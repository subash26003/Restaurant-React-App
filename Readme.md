# Restaurant Webpage

This is a full-stack restaurant webpage built using React and Tailwind CSS for the frontend, and Node.js, Express, and SQL for the backend.

## Table of Contents
- Installation
- Running the Project
- Database Setup
- Connecting Backend to Database
- Images

## Installation

### Clone the Repository
First, clone the repository from GitHub:

git clone https://github.com/yourusername/restaurant-webpage.git
cd restaurant-webpage

## Install Frontend Packages

Navigate to the frontend directory and install the required packages:

- cd frontend
npm install

## Install Backend Packages
Navigate to the backend directory and install the required packages:

- cd ../backend
npm install

### Running the Project
- Run the Frontend Server
In the frontend directory, start the React development server:

    npm start

- Run the Backend Server
In the backend directory, start the Node.js server:

  nodemon server

## Database Setup
- Create SQL Database
Create a database named restaurant and a table named users


CREATE DATABASE restaurant;
USE restaurant;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);


Connecting Backend to Database
Ensure your backend is connected to the SQL database. Update your database configuration in the backend/config/db.js file:

JavaScript

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'restaurant'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

module.exports = connection;
AI-generated code. Review and use carefully. More info on FAQ.
Images
Here are some images of the website:

!Homepage !Menu Page !Contact Page

Feel free to replace the placeholders with your actual paths and credentials. Let me know if you need any further assistance! 😊