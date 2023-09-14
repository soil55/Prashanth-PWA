# Documentaition

Welcome to the documentation for the **Askanjlee**  This document will guide you through setting up the application, installing its dependencies, and running it. Additionally, you'll find a brief description of the project's purpose.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running](#running)

- [Screenshots](#screenshots)
- [License](#license)


## Getting Started

Follow these steps to set up and run the application on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version x.x.x or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js installation)

### Installation

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/project-name.git
2. Navigate to project directory

   ```bash
   cd project-name
3. Run Npm install

   ```bash
   npm install

### Running
1. Run
   ```bash
   npm start
### Screenshots   
![image](https://github.com/soil55/Prashanth-PWA/assets/94616578/16de17bd-74e3-45bd-a8c0-7b64283e0147)
![image](https://github.com/soil55/Prashanth-PWA/assets/94616578/a60f4018-084a-4bd3-bfa9-d769e8474fa4)
![Screenshot (1)](https://github.com/soil55/Prashanth-PWA/assets/94616578/8111d38e-ee43-46d2-90a3-c7f335ec404d)
![Screenshot (2)](https://github.com/soil55/Prashanth-PWA/assets/94616578/ab84e490-acaa-4354-a598-472a58201357)
![Screenshot (3)](https://github.com/soil55/Prashanth-PWA/assets/94616578/e6fc4216-82cf-4dab-b056-7e88ad9fb64b)
![Screenshot (5)](https://github.com/soil55/Prashanth-PWA/assets/94616578/ed171368-16ab-4c71-b260-47b308d42b80)
![Screenshot (7)](https://github.com/soil55/Prashanth-PWA/assets/94616578/4d4033d4-a422-4edd-bc83-acf976d1036f)

## Backend System

## Folder Structure
![image](https://github.com/soil55/Prashanth-PWA/assets/94616578/8488987b-8f56-45b1-9000-393005681569)

The backend system is organized into the following directory structure:

- `/server`: Contains the main application code.
  - `app.py`: Contains the main application logic and routes for handling different endpoints.
  - `config.py`: Contains configuration settings for the application.
  - `models.py`: Contains data models and database interaction logic.
  - `requirements.txt`: Lists all the Python libraries and packages required to run the application.

- `README.md`: Contains documentation and instructions for setting up and running the application.

## Main File (`app.py`)

### Endpoints

1. `/Login` (POST): Login the user with session enabled for that particular user.
2. `/@me` (GET): Fetches details of a specific user based on session id.
3. `/courses` (GET): Fetches a list of courses.
4. `/courses/<course_id>` (GET): Fetches details of a specific course based on `course_id`.
5. `/registration`(POST): Enters the details of a user into the database
6. `/logout`(GET): Ends the session of the user.

## Configuration File (`config.py`)

### Flask Configuration

- `SECRET_KEY`: Secret key for session management.
- `SQLALCHEMY_DATABASE_URI`: URI for connecting to the PostgreSQL database.

### Database Configuration

- `DB_HOST`: PostgreSQL host address.
- `DB_PORT`: PostgreSQL port.
- `DB_NAME`: Name of the database.
- `DB_USER`: Database username.
- `DB_PASSWORD`: Database password.

### Redis Configuration

- `REDIS_HOST`: Redis host address.
- `REDIS_PORT`: Redis port.

## Data Model File (`models.py`)

- Defines classes representing the data entities (e.g., User, Course).
- Includes methods for querying, creating, updating, and deleting records in the database.

## Requirements File (`requirements/requirements.txt`)

- Lists all the Python libraries and packages required to run the application. Includes Flask, SQLAlchemy, psycopg2 (for PostgreSQL), redis, and any other dependencies.








### Purpose
The Aim of this project is to provide courses to students in field of Mathematics, Science , STEM related content and Olympiads.
