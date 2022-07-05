import logo from './logo.svg';
import "./index.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from './components/Navbar';
import Projects from  "./components/Projects";

function App() {
  return (
    <main className="text-gray-200 bg-gray-800">
      <Navbar />
      <About />
      <Projects />
      <Contact />


    </main>
  );
}

export default App;
