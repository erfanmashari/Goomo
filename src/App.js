import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/mainpage/Header/Header"
import Main from "./components/mainpage/Main/Main"
import Footer from "./components/mainpage/Footer/Footer"
import Cart from "./components/mainpage/Cart/Cart"
import Login from "./components/mainpage/LoginRegister/Login"
import Register from "./components/mainpage/LoginRegister/Register"
import PasswordForgotEmail from "./components/mainpage/LoginRegister/PasswordForgotEmail"
import PasswordForgotPhone from "./components/mainpage/LoginRegister/PasswordForgotPhone"
import './App.css';

function App() {
  return (
    <Router>
      <div dir="rtl" className="w-full pt-3">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-forgot-email" element={<PasswordForgotEmail />} />
          <Route path="/password-forgot-phone" element={<PasswordForgotPhone />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
