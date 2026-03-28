# 🚀 Full Stack JWT Authentication System

**React + Spring Boot + MySQL + Docker + JWT Security**

A production-ready full-stack application demonstrating **secure authentication and authorization** using JWT with refresh token rotation, built with modern technologies and deployed using Docker.

---

# 🌐 Live Demo *(Add after deployment)*

* Frontend: http://your-frontend-url
* Backend API: http://your-backend-url
* Swagger UI: https://your-backend-url/swagger-ui.html

---

# 📸 Screenshots

*(Add images in /screenshots folder)*

* 🔐 Login Page
* 📊 Dashboard
* 📄 Swagger API Docs

---

# 🏗️ Architecture Overview

* Stateless Authentication using JWT
* Refresh Token stored securely in HttpOnly cookies
* Role-Based Access Control (USER / ADMIN)
* Secure REST APIs with Spring Security
* React frontend with protected routes
* Dockerized multi-container architecture

---

# 🛠️ Tech Stack

| Layer    | Technology                                |
| -------- | ----------------------------------------- |
| Frontend | React, Redux Toolkit, Axios, Tailwind CSS |
| Backend  | Spring Boot 3, Spring Security 6          |
| Database | MySQL 8                                   |
| Auth     | JWT (Access + Refresh Token)              |
| DevOps   | Docker, Docker Compose                    |
| API Docs | Swagger (OpenAPI)                         |

---

# 🔐 Security Features

### ✔ JWT Access Token

* Bearer token authentication
* Includes user roles and metadata
* Stateless and scalable

### ✔ Refresh Token Rotation

* Stored in database
* Sent via HttpOnly cookie
* Auto refresh on expiration
* Old tokens invalidated

### ✔ Role-Based Authorization

| Role  | Access               |
| ----- | -------------------- |
| USER  | Read data            |
| ADMIN | Full CRUD operations |

---

# 🔄 Authentication Flow

1. **Register** → `/api/auth/register`
2. **Login** → `/api/auth/login`

   * Returns:

     * Access Token (JWT)
     * Refresh Token (Cookie)
3. **Access APIs**

   * Use header:

     ```
     Authorization: Bearer <token>
     ```
4. **Refresh Token**

   * `/api/auth/refresh-token`
5. **Logout**

   * Invalidates refresh token

---

# 📦 API Endpoints

## 🔑 Auth APIs

| Method | Endpoint                |
| ------ | ----------------------- |
| POST   | /api/auth/register      |
| POST   | /api/auth/login         |
| POST   | /api/auth/refresh-token |
| POST   | /api/auth/logout        |

---

## 📊 Product APIs

Base: `/api/v1/products`

| Method | Endpoint | Role  |
| ------ | -------- | ----- |
| GET    | /        | USER  |
| GET    | /{id}    | USER  |
| POST   | /        | ADMIN |
| PUT    | /{id}    | ADMIN |
| DELETE | /{id}    | ADMIN |

---

## 👥 User APIs

Base: `/api/v1`

| Method | Endpoint         | Role          |
| ------ | ---------------- | ------------- |
| GET    | /users           | ADMIN         |
| GET    | /loadUser/{id}   | Authenticated |
| PUT    | /updateUser/{id} | Authenticated |
| DELETE | /deleteUser/{id} | ADMIN         |

---

# 🗄️ Database Design

### User

* id
* email
* password (BCrypt)
* roles
* createdAt

### Product

* id
* name
* createdBy

### RefreshToken

* token
* expiryDate
* user_id

---

# ⚙️ Environment Variables

| Variable                   | Description   |
| -------------------------- | ------------- |
| SPRING_DATASOURCE_URL      | DB connection |
| SPRING_DATASOURCE_USERNAME | DB username   |
| SPRING_DATASOURCE_PASSWORD | DB password   |
| JWT_SECRET                 | Secret key    |

---

# 🐳 Docker Setup

## ▶ Run Full Application

```bash
docker compose up --build
```

## 📦 Services

* Backend (Spring Boot)
* Frontend (React + Nginx)
* MySQL Database

---

# 🏗️ Docker Architecture

* Multi-stage build (Maven + JRE)
* React build served via Nginx
* MySQL with persistent volume

---

# 📂 Project Structure

```
backend/
 ├── controller/
 ├── service/
 ├── repository/
 ├── security/
 ├── config/

frontend/
 ├── components/
 ├── pages/
 ├── redux/
 ├── api/
```

---

# ⚡ Quick Start (Local Setup)

```bash
# Clone repo
git clone https://github.com/yourusername/springboot-react-jwt-auth-system.git

# Run using Docker
docker compose up --build

# Open browser
http://localhost:3000
```

---

# 🧠 Key Highlights

* Secure JWT Authentication with refresh token rotation
* Production-ready Spring Security setup
* Clean frontend architecture with Redux
* Fully Dockerized environment
* Scalable and maintainable design

---

# 🧪 Testing

* Tested APIs using Postman
* Swagger UI available for interactive testing

---

# 🎯 Why This Project?

This project demonstrates real-world backend and frontend skills including:

* Secure authentication mechanisms
* REST API development
* State management in React
* Containerized deployment
* Production-level architecture

---

# 👨‍💻 Author

**Your Name**

* GitHub: https://github.com/yourusername
* LinkedIn: your-link

---

# ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!





