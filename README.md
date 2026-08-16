# Cognifyz Task 7 - Advanced API Usage and External API Integration

## Project Overview

This project was developed as part of the Cognifyz Technologies Full Stack Development Internship.

Task 7 focuses on advanced API concepts and integrating external APIs into a Node.js and Express application.

The application communicates with a third-party API through the backend and displays the received data on the frontend.

## Features

- External API integration using Axios
- Server-to-server API communication
- REST API endpoint for external data
- JSON data handling
- API error handling
- Rate limiting using Express middleware
- OAuth concepts and secure API authentication study
- Dynamic frontend data display

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript
- EJS

### Backend
- Node.js
- Express.js
- Axios

### Security and API Features
- Express Rate Limit
- OAuth concepts
- Environment variables using dotenv

## Project Structure

Cognifyz-Task-7/

├── public/
│   ├── script.js
│   └── styles.css
│
├── views/
│   └── index.ejs
│
├── .env
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
└── server.js

## API Flow

Browser
    ↓
Frontend fetch()
    ↓
Express API
    ↓
Rate Limiter
    ↓
Axios
    ↓
Third-Party API
    ↓
JSON Response
    ↓
Express Server
    ↓
Frontend

## API Endpoint

### GET /api/external-data

This endpoint sends a request from the Express server to an external API using Axios and returns the received data to the frontend as JSON.

## Error Handling

The application uses try-catch error handling when communicating with the external API.

If the external API request fails, the server returns an appropriate error response instead of crashing.

## Rate Limiting

Rate limiting is implemented using `express-rate-limit`.

The API restricts the number of requests a client can make within a specific time window.

This helps prevent excessive requests and API abuse.

## OAuth

OAuth concepts were investigated as part of Task 7 to understand secure delegated authorization and access to protected third-party resources.

## Installation

Clone the repository:

git clone https://github.com/vedanthkandibanda/Cognifyz-Task-7.git

Move into the project:

cd Cognifyz-Task-7

Install dependencies:

npm install

Create a `.env` file for environment variables if required.

Start the server:

node server.js

Open:

http://localhost:3000

## Learning Outcomes

Through this task, I learned:

- How server-side applications communicate with third-party APIs
- How Axios performs HTTP requests
- How to handle external API errors
- How Express middleware works with rate limiting
- Why APIs need request limits
- OAuth fundamentals
- Difference between API keys, JWT and OAuth
- Server-to-server API communication

## Internship

Cognifyz Technologies  
Full Stack Development Internship

Task: 7 - Advanced API Usage and External API Integration