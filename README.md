# 🍴 RR Bistro – Culinary Excellence & Event Experiences

RR Bistro is a sophisticated platform designed to deliver a complete dining and event experience. From a diverse **food menu** to a vibrant **bar menu** featuring refreshing **mocktails**, every offering is crafted to delight the senses. Patrons can effortlessly explore signature dishes, discover featured specials, and enjoy a curated selection of beverages for any occasion.

Beyond individual dining, RR Bistro caters to **corporate meetings, private gatherings, and parties**, providing a seamless way to plan and host events in an elegant and inviting atmosphere. The platform ensures that every interaction whether ordering a meal, selecting drinks, or arranging a group event is intuitive, efficient, and enjoyable.

More than just a digital menu, RR Bistro is a gateway to memorable culinary and social experiences where taste, convenience, and sophistication come together to create moments that linger long after the meal is over

---

# RR-Bistro – (Frontend)

A modern, responsive **restaurant ordering website** built with **React, TypeScript, Vite, and Tailwind CSS**, integrated with a **Spring Boot backend**.
Includes **Dark/Light mode toggle**, smooth animations, and a clean UI powered by **Framer Motion** and **Lucide icons**.

---

## 🌟 Features

### 🎨 Frontend Features

* **Dark/Light Mode Toggle**: Seamless theme switching for better UX
* **Lucide Icons + Framer Motion**: Beautiful icons and smooth animations
* **Modern React Architecture**: React 18 + TypeScript + Vite
* **Responsive UI**: Tailwind CSS with mobile-first design
* **State Management**: Context API for authentication & cart
* **Reusable Components**: Navbar, Footer, Buttons, Spinners
* **Authentication**: Login, register, and session persistence
* **Cart & Checkout**: Full shopping cart + order workflow
* **Reservations**: Book a table with backend integration
* **Reviews**: Leave and view restaurant reviews
* **Admin Dashboard**: Manage menu items, orders, and reservations

---

## 🚀 Quick Start

### Prerequisites

* Node.js (v16+)
* Spring Boot backend running at `http://localhost:8080`

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: 👉 `http://localhost:5173`

---

## 🔧 Backend API Integration

API Base URL:

```ts
const API_BASE_URL = "http://localhost:8080/api";
```

Integrated APIs:

* **Auth**: Register & Login
* **Menu Items**: Browse, CRUD (Admin only)
* **Orders**: Place & view order history
* **Reservations**: Create & manage table reservations
* **Reviews**: Add and view customer reviews
* **Admin**: Manage menu, orders, and users

---

## 📱 Pages & Features

* 🧭  **Explore** – Discover the restaurant and its ambiance
* 📖 **Menu** – Browse dishes, categories, search, filtering
* 🛒 **Cart** – Add/remove/update items, price calculation
* 💳 **Checkout** – Place orders, requires login
* 📦 **Orders** – Order history & status tracking
* 🍽️ **Reservations** – Book a table online
* ⭐ **Reviews** – Submit and view reviews
* 🔑 **Auth (Login/Register)** – Secure authentication
* 🛠️ **Admin Dashboard** – Manage menu items, orders, reservations
* ℹ️ **About / Corporate** – Restaurant story, mission
* 📞 **Contact** – Form & location details

---

## 🎨 Design System

* **Theme**: Dark + Light mode toggle
* **Icons**: Lucide
* **Animations**: Framer Motion
* **Typography**: Inter font family
* **Components**: Cards, Buttons, Modals, Forms, Badges

---

## 🔄 State Management

* **AuthContext** – Handles login, registration, session persistence
* **CartContext** – Manages cart items, quantity, checkout
* **LocalStorage** – Persists user session + cart between refreshes

---

## 🛠️ Project Structure

```
frontend/
├── public/                  # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/              # Images, fonts, icons, etc.
│   ├── components/          # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── LoadingSpinner.tsx
│   │
│   ├── context/             # React Context for global state
│   │   ├── AuthContext.tsx
│   │   └── CartContext.tsx
│   │
│   ├── pages/               # Top-level pages/routes
│   │   ├── auth/            # Authentication pages
│   │   │   ├── Login.tsx
│   │   │   └── Signup.tsx
│   │   ├── About.tsx
│   │   ├── Admin.tsx
│   │   ├── Checkout.tsx
│   │   ├── Corporate.tsx
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   ├── OrderConfirmation.tsx
│   │   ├── Orders.tsx
│   │   ├── Reservations.tsx
│   │   └── Reviews.tsx
│   │
│   ├── services/            # API service layer
│   │   └── api.ts           # Centralized backend API calls
│   │
│   ├── styles/              # Global & theme-specific styles
│   │   └── index.css
│   │
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx              # Root app component
│   ├── main.tsx             # App bootstrap
│   └── vite-env.d.ts        # TypeScript environment definitions
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Deployment

```bash
npm run build   # Production build
npm run preview # Preview locally
```

---

## 🔒 Security

* Form validation on all inputs
* CORS handled in backend
* Secure API requests

---

## 📈 Performance

* Code-splitting & lazy loading
* Optimized Tailwind build
* Responsive images
* Minimal bundle size

---


---

# RR-Bistro – (Backend)

Spring Boot backend for **RR-Bistro**, handling all business logic, database interaction, and API endpoints.
Supports **authentication, menu management, orders, reservations, reviews**, and **admin functionalities**.

---

## 🌟 Features

### ⚙️ Backend Features

* **Spring Boot 3 + Java 17** – Modern backend stack
* **RESTful APIs** – Exposes endpoints for frontend integration
* **Database** – JPA/Hibernate with MySQL/PostgreSQL support
* **Exception Handling** – Global and custom exceptions
* **Services Layer** – Clean separation of business logic
* **Repositories** – JPA repositories for CRUD operations
* **Admin Dashboard APIs** – Manage menu items, orders, reservations, users
* **Reservation System** – Table booking with status management
* **Reviews Management** – Add/view customer reviews

---

## 🚀 Quick Start

### Prerequisites

* Java 17+
* Maven 3.8+
* Database (MySQL/PostgreSQL) running and configured in `application.properties`

### Installation & Run

```bash
# Clone repository
git clone <backend-repo-url>

# Navigate to backend folder
cd backend

# Build project
mvn clean install

# Run application
mvn spring-boot:run
```

API will start at: 👉 `http://localhost:8080`

---

## 🔧 API Base URL

```java
http://localhost:8080/api
```

Integrated APIs:

* **Auth** – Register & Login users
* **Menu Items** – Browse, CRUD (Admin only)
* **Orders** – Place & view order history
* **Reservations** – Create & manage table bookings
* **Reviews** – Add and view reviews
* **Admin** – Manage menu, orders, users

---

## 🛠️ Project Structure

```
backend/
├── src/main/java/com/rrbistro/
│   ├── RRbistro1Application.java      # Main Spring Boot application
│   ├── config/
│   │   ├── SecurityConfig.java
│   │   └── WebConfig.java
│   │
│   ├── controller/
│   │   ├── AdminController.java
│   │   ├── FrontendController.java
│   │   ├── MenuItemController.java
│   │   ├── OrderController.java
│   │   ├── ReservationController.java
│   │   ├── ReviewController.java
│   │   └── UserController.java
│   │
│   ├── entity/
│   │   ├── Admin.java
│   │   ├── MenuItem.java
│   │   ├── Order.java
│   │   ├── OrderItem.java
│   │   ├── OrderStatus.java
│   │   ├── Reservation.java
│   │   ├── Review.java
│   │   └── User.java
│   │
│   ├── exception/
│   │   ├── BadRequestException.java
│   │   ├── EmailAlreadyExistsException.java
│   │   ├── GlobalExceptionHandler.java
│   │   └── ResourceNotFoundException.java
│   │
│   ├── repository/
│   │   ├── AdminRepository.java
│   │   ├── MenuItemRepository.java
│   │   ├── OrderItemRepository.java
│   │   ├── OrderRepository.java
│   │   ├── ReservationRepository.java
│   │   ├── ReviewRepository.java
│   │   └── UserRepository.java
│   │
│   ├── service/
│   │   ├── AdminService.java
│   │   ├── MenuItemService.java
│   │   ├── OrderService.java
│   │   ├── ReservationService.java
│   │   ├── ReviewService.java
│   │   └── UserService.java
│   │
│   └── service/impl/
│       ├── AdminServiceImpl.java
│       ├── MenuItemServiceImpl.java
│       ├── OrderServiceImpl.java
│       ├── ReservationServiceImpl.java
│       ├── ReviewServiceImpl.java
│       └── UserServiceImpl.java
│
├── src/main/resources/
│   ├── static/
│   ├── templates/
│   └── application.properties
│
├── pom.xml
└── README.md
```

---

## 🔄 State Management

* **Services** – Handles business logic (menu, orders, reservations, reviews)
* **Repositories** – CRUD operations and database interactions
* **Exception Handling** – Global and custom exceptions for clean error messages
* **Controllers** – Expose REST APIs for frontend consumption

---

## 🔒 Security

* Spring Security configured in `SecurityConfig.java`
* CORS and endpoint access controlled via `WebConfig.java`
* Password hashing and secure storage

---

## 📈 Performance

* JPA/Hibernate optimized queries
* Lazy loading of related entities
* Proper exception handling to prevent unnecessary API calls
* Modular service layer for scalability

---

## 🚀 Deployment

```bash
# Build backend for production
mvn clean package

# Run JAR
java -jar target/RRbistro1-0.0.1-SNAPSHOT.jar
```

---

## 🌗 Preview

| Home (Light) | Home (Dark) |
|--------------|-------------|
| <img width="1923" height="4322" alt="HOME" src="https://github.com/user-attachments/assets/33e8ea64-43fa-4184-bb1d-5eb49b1abe0d" /> | <img width="1923" height="4322" alt="HomeDark" src="https://github.com/user-attachments/assets/66e2491e-99c4-4fe2-95e2-d4ea68d4b5ff" />|

---

| Food Menu (Light) | Food Menu (Dark) |
|-------------------|-----------------|
|  | ![Home Dark](./screenshots/homepage-dark.png) |

---

| Bar Menu (Light)  | Bar Menu (Dark) |
|-------------------|-----------------|
| ![Home Light](./screenshots/homepage-light.png) | ![Home Dark](./screenshots/homepage-dark.png) |

---
