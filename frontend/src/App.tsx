import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Orders from "./pages/Orders";
import Reviews from "./pages/Reviews";
import Admin from "./pages/Admin";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import About from "./pages/About";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Corporate from "./pages/Corporate";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {/*  Supports dark/light mode */}
          <div className="min-h-screen bg-background dark:bg-darkBackground font-body text-gray-900 dark:text-darkText transition-colors duration-300">
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/corporate" element={<Corporate />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
