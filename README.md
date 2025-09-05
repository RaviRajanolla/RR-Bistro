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

| Food Menu (Light) |
|-------------------|
<img width="1923" height="4353" alt="FOOD Menu2" src="https://github.com/user-attachments/assets/23bea02e-0d72-409a-afcc-a921643fc1d6" /> <img width="1885" height="5851" alt="FOOD Menu3" src="https://github.com/user-attachments/assets/15812d12-a1a3-4462-90d2-b4b791993436" /> <img width="1884" height="4828" alt="FOOD Menu5" src="https://github.com/user-attachments/assets/93259b45-d6a0-4e80-b384-e711da80d30c" /> <img width="1920" height="6025" alt="FOOD Menu6" src="https://github.com/user-attachments/assets/5afd1656-eee5-41d8-a654-e8b1b97c61b0" />

---
|  Food Menu (Dark) |
|-------------------|
|<img width="1923" height="5114" alt="FoodDark1" src="https://github.com/user-attachments/assets/23542a1c-9261-40d1-9cc3-89087e173334" /><img width="1922" height="5165" alt="FoodDark2" src="https://github.com/user-attachments/assets/389e7c79-f99e-4450-9acf-2def0c1066aa" /><img width="1923" height="5564" alt="FoodDark3" src="https://github.com/user-attachments/assets/20c6c3e0-7c83-467d-aab1-4cc461689e29" /><img width="1923" height="5200" alt="FoodDark5" src="https://github.com/user-attachments/assets/cc56abbe-44a6-461d-a604-ac69f69b4b4e" />




| Bar Menu (Light)  | Bar Menu (Dark) |
|-------------------|-----------------|
| ![Home Light](./screenshots/homepage-light.png) | ![Home Dark](./screenshots/homepage-dark.png) |

---

| Reserve Table (Light) | Reserve Table (Dark) |
|-----------------------|----------------------|
| <img width="1923" height="1439" alt="Reservation" src="https://github.com/user-attachments/assets/5dfcf787-fa8a-495a-89bf-c7d6d686775e" /> | <img width="1923" height="1439" alt="screencapture-localhost-5173-reservations-2025-09-05-13_22_16" src="https://github.com/user-attachments/assets/00cd4424-de12-46f2-93cd-72f111c94468" />|

---
|Reservation Confirmed (Light)  | Reservation Confirmed (Dark) |
|-------------------------------|------------------------------|
| <img width="1923" height="1439" alt="Reservation confirm" src="https://github.com/user-attachments/assets/2ff806a1-7822-4a77-920d-9b944bb27dee" /> | <img width="1923" height="1439" alt="screencapture-localhost-5173-reservations-2025-09-05-13_23_41" src="https://github.com/user-attachments/assets/e9daa314-6d99-4540-bfa9-087fb2dd35b5" />|

---

| Review (Light) | Review (Dark) |
|----------------|---------------|
| <img width="1923" height="1439" alt="Review" src="https://github.com/user-attachments/assets/88d617f3-e944-42b0-962a-6edb136fd317" /> | <img width="1923" height="1439" alt="screencapture-localhost-5173-reviews-2025-09-05-14_15_45" src="https://github.com/user-attachments/assets/46f0aed5-f943-4a4c-81e2-c302165c56bd" />|

---


| About (Light)  | About (Dark) |
|-------------------|-----------------|
| <img width="1923" height="4198" alt="About" src="https://github.com/user-attachments/assets/c9de65a3-cfaa-4f16-922b-e56857e072c9" />| <img width="1923" height="4198" alt="AboutDark" src="https://github.com/user-attachments/assets/c7429598-0f35-4830-bc0e-6f01a217b23a" />|

---

| Corporate (Light)  | Corporate (Dark) |
|--------------------|------------------|
| <img width="1923" height="4442" alt="Corporate" src="https://github.com/user-attachments/assets/866729f5-b8da-42ff-a949-576d3a1a8064" /> | <img width="1923" height="4442" alt="CorporateDark" src="https://github.com/user-attachments/assets/3c5861b0-5b75-483b-bfd9-117630e86109" />|

---

| Orders (Light)  | Orders (Dark) |
|-----------------|---------------|
| <img width="1923" height="2056" alt="Order" src="https://github.com/user-attachments/assets/d065c3d8-e0c9-4e9e-a497-d650a8365bbc" /> | <img width="1923" height="2498" alt="screencapture-localhost-5173-orders-2025-09-05-13_35_48" src="https://github.com/user-attachments/assets/8675038a-c2df-4b86-ad79-f82e07c8b141" />|

---

| Checkout (Light)  | Checkout (Dark) |
|-------------------|-----------------|
| <img width="1923" height="1439" alt="screencapture-localhost-5173-checkout-2025-09-05-13_39_29" src="https://github.com/user-attachments/assets/9e55b71a-e8aa-47fa-a8ab-67f9ff4ed44c" /> | <img width="1923" height="1439" alt="screencapture-localhost-5173-checkout-2025-09-05-13_38_18" src="https://github.com/user-attachments/assets/0a985bf9-d029-45cb-a3d5-ff1e60a18c0a" />|

---

| Order Confirmed (Light) | Order Confirmed (Dark) |
|-------------------------|------------------------|
|<img width="1923" height="1439" alt="Order Confirm" src="https://github.com/user-attachments/assets/bc406602-ad1d-4706-ad81-d3af515fc492" /> |<img width="1923" height="1439" alt="screencapture-localhost-5173-order-confirmation-2025-09-05-13_40_58 (1)" src="https://github.com/user-attachments/assets/30e9343c-3a3e-4319-bf1e-76b821ca0e4f" />|

---

| Admin Panel (Light) | Admin Panel (Dark) |
|---------------------|--------------------|
|<img width="1883" height="900" alt="image" src="https://github.com/user-attachments/assets/b7786c44-24e6-4551-8efa-c6b654868ead" /> | <img width="1920" height="880" alt="Screenshot 2025-09-05 135540" src="https://github.com/user-attachments/assets/5a63804f-57d6-4ade-846c-69d9a6f18f4a" />|

---

| Sign In (Light) | Sign In (Dark) |
|-----------------|----------------|
|<img width="1923" height="1439" alt="SignIn" src="https://github.com/user-attachments/assets/357e8b0a-1a6a-4fe0-886d-fdc5bde6f2a6" /> |<img width="1923" height="1439" alt="SignInDark" src="https://github.com/user-attachments/assets/91751a24-baba-4a04-b0b5-c2745ef5d225" />|

---

| Sign Up (Light) | Sign Up (Dark) |
|-----------------|----------------|
|<img width="1923" height="1439" alt="SignUp" src="https://github.com/user-attachments/assets/38733d9b-76de-440f-8349-45a3b6305a4d" />|<img width="1923" height="1439" alt="SignUpDark" src="https://github.com/user-attachments/assets/7db037ad-fde4-4c3a-90ee-c3400f518804" />|

---
