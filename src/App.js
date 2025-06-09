import './App.css';
import Header from './Components/Header';
import PortfolioHomepage from './Components/PortfolioHomepage';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Header />

      {/* Optional Home section (for logo scroll) */}
      <div id="home">
        {/* If you have a hero or top content, put it here */}
      </div>

      <div id="portfolio">
        <PortfolioHomepage />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
