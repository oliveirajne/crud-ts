# Course Management API (crud-ts)

This project is a Node.js backend application built using TypeScript and Express.js, featuring JWT-based authentication and basic CRUD operations for a `Course` object. The application is containerized with Docker and can be deployed with Docker Compose.

## Features
- **Authentication**: Secure login with JWT-based authentication.
- **CRUD Operations**: RESTful endpoints to create, read, update, and delete course entries.
- **Lightweight Database**: Data storage in SQLite.
- **Input Validation**: Validates input for login and course endpoints using `express-validator`.
- **Testing**: Core functionality tested with Jest.

## Requirements
- [Docker](https://www.docker.com/) and Docker Compose installed

## Project Structure
- **src**: Contains all source code files including controllers, routes, and middlewares
- **dist**: Compiled JavaScript files (generated after running `npm run build`)
- **Dockerfile**: Defines the container image
- **docker-compose.yml**: Sets up the application and database containers
- **tsconfig.json**: TypeScript configuration file

## Endpoints

### Authentication
- `POST /login`: Send user credentials (username and password are hardcoded) to obtain a JWT token valid for 1 hour.
### Example
```
curl --location 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "admin",
    "password": "password123"
}'
```

### Course CRUD
All course endpoints require the JWT token to be passed as a Bearer Token in the Authorization header.
- `POST /courses`: Create a new course (requires JWT).
- `GET /courses`: Retrieve all courses with optional filtering (requires JWT).
- `GET /courses/:id`: Retrieve a single course by its ID (requires JWT).
- `PUT /courses/:id`: Update a course by its ID (requires JWT).
- `DELETE /courses/:id`: Delete a course by its ID (requires JWT).
### Example
```
curl --location 'localhost:3000/courses' \
--header 'Authorization: Bearer <token>' \
--header 'Content-Type: application/json' \
--data '{
    "title": "advanced course",
    "description": "description advanced course",
    "duration": 60,
    "instructor": "katia"
}'
```

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/oliveirajne/crud-ts.git
   cd crud-ts
   ```

2. **Run with Docker Compose**
   Build and start the application with Docker:
   ```bash
   docker compose up --build
   ```

3. **Accessing the API**
   The API will be available at `http://localhost:3000`.

## Running Tests
To run unit tests:
```bash
npm run test
```

## Technologies Used
- **Node.js**
- **Express.js**
- **TypeScript**
- **SQLite** (or in-memory database)
- **JWT** for Authentication
- **Docker** and **Docker Compose**
- **Jest** for testing
