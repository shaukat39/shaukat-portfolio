import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Products from './components/Products';
import Services from './components/Services';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-600">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Products />
        <Services />
        <Stats />
        <Contact />
        <Legal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
