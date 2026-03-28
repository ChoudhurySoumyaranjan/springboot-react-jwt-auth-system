FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

# ❌ OLD (wrong)
# FROM openjdk:21-jdk-slim

# ✅ NEW (correct)
FROM eclipse-temurin:21-jdk-jammy

WORKDIR /app
COPY --from=build /app/target/spring-crud-jwt.jar app.jar

EXPOSE 5000

ENTRYPOINT ["java","-jar","app.jar"]