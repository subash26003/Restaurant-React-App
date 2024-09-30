# Restaurant Webpage

<img height="600" width="1200" src="https://res.cloudinary.com/dosxybcit/image/upload/v1727679642/nexus-project/Screenshot_237_g5uc30.png" />
<img height="600" width="1200" src="https://res.cloudinary.com/dosxybcit/image/upload/v1727679640/nexus-project/Screenshot_238_uljk8h.png" />
<img height="600" width="1200" src="https://res.cloudinary.com/dosxybcit/image/upload/v1727679639/nexus-project/Screenshot_239_fepwvw.png" />
<img height="600" width="1200" src="https://res.cloudinary.com/dosxybcit/image/upload/v1727679639/nexus-project/Screenshot_240_hoieek.png" />

This is a full-stack restaurant webpage built using React and Tailwind CSS for the frontend, and Node.js, Express, and SQL for the backend. The backend is specifically designed to handle login and signup authentication.

## Table of Contents
- Installation
- Running the Project
- Database Setup
- Connecting Backend to Database
- Images

## Installation

### Clone the Repository
First, clone the repository from GitHub:

git clone [https://github.com/subash26003/Restaurant-React-App.git](https://github.com/subash26003/Restaurant-React-App.git)
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


## Connecting Backend to Database
    Ensure your backend is connected to the SQL database. Update your database configuration in the backend/server.js file:
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


