import "./App.css";
import Home from "./Components/Homepage/Home";
import Login from "./Components/LoginPage/Login";
import SignUp from "./Components/LoginPage/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { QuizPage } from "./Components/QuizInHome/QuizInHome";

function App() {

  return (
    <>
      <Router>
      <NavBarWithLocation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

function NavBarWithLocation() {
  const location = useLocation();
  return (
    <>
      {(location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact") && <Navbar />}
    </>
  );
}

export default App;