# ATSAuthService
### Project Overview
The Auth Service is a dedicated microservice responsible for handling all user authentication and authorization within the Resume ATS Score Analyzer application. It acts as the gatekeeper for user access, ensuring secure registration, login, and session management.

## Key Responsibilities & Features
User Registration (Signup): Allows new users to create accounts securely.
User Authentication (Login): Verifies user credentials and issues JSON Web Tokens (JWTs) upon successful login.
Session Management: Generates and validates JWTs, enabling secure, stateless authentication for subsequent API requests.
User Logout: Facilitates secure session termination.
Data Storage: Manages user credentials and related data, persisting it in a MongoDB database.

## Technologies Used
Backend Framework: Node.js (Express.js)
Database: MongoDB
Authentication: JSON Web Tokens (JWT) for secure, stateless user sessions.

### Role in Architecture
The Auth Service is a core component of the microservices architecture. It is directly consumed by the API Gateway, which forwards authentication-related requests from the UI. This clear separation of concerns ensures that authentication logic is centralized, reusable, and scalable independently of other application functionalities.