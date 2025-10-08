import { Toaster } from "react-hot-toast";
import Navbar from "../src/comeponents/Navbar/Navbar";
import Banner from '../src/comeponents/Banner/Banner'
import AboutMe from "./comeponents/AboutMe/AboutMe";
import "./App.css";
import Skills from "./comeponents/Skills/Skills";
import Education from "./comeponents/Education/Education";
import Projects from "./comeponents/Project/Project";
import Contact from "./comeponents/Contact/Contact";
import ProjectCard from "./comeponents/Project/ProjectCard";
import Hero from "./comeponents/hero/Hero";

function App() {
  return (
    <>
      <Toaster></Toaster>
     
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <ProjectCard></ProjectCard>
      
   
      <Contact></Contact>


      
    </>
  );
}

export default App;
