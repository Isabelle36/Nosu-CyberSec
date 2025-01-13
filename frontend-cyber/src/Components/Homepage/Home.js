import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <>
        <div className="h-screen fulls bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl opacity-30 rounded-full"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-center textTop">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg ">
          Welcome to CyberSec
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg ">
        Become a cybersecurity pro with hands-on lessons, practical tips, and expert insights
        </p>
        <button className="mt-6 px-6 py-3  bg-cyan-500 hover:bg-cyan-600 text-black font-sans font-semibold antialiased rounded-lg shadow-md text-lg">
          Learn More
        </button>
      </div>
    </div>
    </>
  )
}
