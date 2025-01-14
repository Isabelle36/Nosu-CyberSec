import {React,useEffect} from 'react'
import './Home.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import QuizInHome from '../QuizInHome/QuizInHome'
import Footer from '../Footer/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700, // Adjust the duration of the animation
      once: true, // Trigger animation only once when scrolling
    });
  }, []);
  
  return (
    <>
      <div className="h-full fulls bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] relative overflow-auto">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl opacity-30 rounded-full"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-center textTop">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          >
            Welcome to CyberSec
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg"
          >
            Become a cybersecurity pro with hands-on lessons, practical tips, and expert insights
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-sans font-semibold antialiased rounded-lg shadow-md text-lg"
          >
            Learn More
          </button>
        </div>
        <QuizInHome />
      </div>
        <Footer/>
    </>
  );
}