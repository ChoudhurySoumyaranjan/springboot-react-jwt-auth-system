# 🚀 Spring Boot JWT Secure CRUD API

Production-ready REST API built with **Spring Boot 3**, **Spring Security (JWT)**, **MySQL 8**, **Docker Compose**, **HTTPS (SSL)**, and **Swagger OpenAPI documentation**.

This project demonstrates enterprise-level authentication, authorization, refresh token rotation, role-based access control, and containerized deployment.

---

# 🏗️ Architecture Overview

- Stateless JWT Authentication
- Refresh Token Rotation with DB persistence
- Role-Based Authorization (USER / ADMIN)
- Method-level security with `@PreAuthorize`
- Global Exception Handling
- HTTPS enabled (SSL keystore)
- Dockerized multi-container setup
- Swagger API Documentation
- Pagination support
- Production-ready security configuration

---

# 🛠️ Tech Stack

| Technology | Version |
|------------|----------|
| Java | 17 |
| Spring Boot | 3.x |
| Spring Security | 6.x |
| Hibernate / JPA | 6.x |
| MySQL | 8.1 |
| JWT | io.jsonwebtoken |
| Docker | Multi-stage build |
| OpenAPI | springdoc-openapi |
| Maven | 3.9 |

---

# 🔐 Security Features

### ✔ JWT Access Token
- HS256 signature
- Includes:
    - roles
    - employeeId
    - fullName
    - phoneNumber
    - issuer validation
    - audience validation

### ✔ Refresh Token (Secure Rotation)
- Stored in DB
- HttpOnly Cookie
- Auto rotation on refresh
- Old token invalidation
- Expiry validation

### ✔ Role-Based Authorization

| Role | Access |
|------|--------|
| USER | Read Products |
| ADMIN | Create / Update / Delete Products |
| ADMIN | Manage Users |

---

# 🌐 API Base URL

Swagger UI:https://localhost:5000/swagger-ui.html

OpenAPI JSON:https://localhost:5000/api-docs


---

# 🔑 Authentication Flow

## 1️⃣ Register:- 
        POST /api/auth/register

## 2️⃣ Login:- 
        POST /api/auth/login

    Returns:
    - Access Token (Bearer)
      - Refresh Token (HttpOnly cookie)
      - User Details

## 3️⃣ Access Protected APIs:-
    Add header: Authorization: Bearer <access_token>

## 4️⃣ Refresh Token:-
        POST /api/auth/refresh-token
    Uses cookie automatically.

## 5️⃣ Logout:-
        POST /api/auth/logout
    Invalidates refresh token.

---

# 📦 Product APIs:-
        Base:
    /api/v1/products

| Method | Endpoint | Role Required |
|--------|----------|---------------|
| GET | / | USER |
| GET | /{id} | USER |
| POST | / | ADMIN |
| PUT | /{id} | ADMIN |
| DELETE | /{id} | ADMIN |
| GET | /{id}/items | USER |

---

# 👥 User Management APIs:-
        Base:
    /api/v1


| Method | Endpoint | Role Required |
|--------|----------|---------------|
| GET | /users | ADMIN |
| GET | /loadUser/{id} | Authenticated |
| PUT | /updateUser/{id} | Authenticated |
| DELETE | /deleteUser/{id} | ADMIN |

---

# 🗄️ Database Design

### User
- id
- firstName
- lastName
- email (unique)
- password (BCrypt)
- roles (USER / ADMIN)
- createdAt
- updatedAt

### Product
- id
- productName
- createdBy
- createdOn
- modifiedBy
- modifiedOn

### Item
- id
- product_id (FK)
- quantity

### RefreshToken
- id
- token
- expiryDate
- user_id (FK)

---

# 🐳 Docker Deployment

## Build & Run

```bash

docker compose up --build 
    ## 🐳 Services

- springboot-app
- springboot-mysql

---

## 🏗 Multi-Stage Dockerfile

- Maven build stage
- Lightweight JRE runtime
- SSL keystore included
- Port 5000 exposed

---

## 🔒 HTTPS Configuration

- PKCS12 keystore
- SSL enabled
- All requests require secure channel




