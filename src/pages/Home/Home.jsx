import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';
import Projects from '../../components/Projects/Projects';
import Education from '../../components/Education/Education';
import Contact from '../../components/Contact/Contact';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;