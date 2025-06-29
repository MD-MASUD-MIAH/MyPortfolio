import { Toaster } from "react-hot-toast";
import Navbar from "../src/comeponents/Navbar/Navbar";
import Banner from '../src/comeponents/Banner/Banner'
import AboutMe from "./comeponents/AboutMe/AboutMe";
import "./App.css";
import Skills from "./comeponents/Skills/Skills";
import Education from "./comeponents/Education/Education";
import Projects from "./comeponents/Project/Project";
import Contact from "./comeponents/Contact/Contact";
import { BrowserRouter as Router } from 'react-router';
function App() {
  return (
    <Router>
      <Toaster></Toaster>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
   
<Projects></Projects>
   
      <Contact></Contact>


      
    </Router>
  );
}

export default App;
