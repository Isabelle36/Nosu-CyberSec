import "./App.css";
import Home from "./Components/Homepage/Home";
import Login from "./Components/LoginPage/Login";
import SignUp from "./Components/LoginPage/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { QuizPage } from "./Components/QuizInHome/QuizInHome";
import Quiz1 from "./Components/Quizzes/Quiz1";
import Quiz2 from "./Components/Quizzes/Quiz2";
import Quiz3 from "./Components/Quizzes/Quiz3";
import About from "./Components/About";
import Lessons from "./Components/Lessons/Lessons";
import CourseGeneration from "./Components/CourseGeneration/CourseGeneration";

function App() {
  return (
    <>
      <Router>
        <NavBarWithLocation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/quiz/1" element={<Quiz1 />} />
          <Route path="/quiz/2" element={<Quiz2 />} />
          <Route path="/quiz/3" element={<Quiz3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseGeneration/>} />
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