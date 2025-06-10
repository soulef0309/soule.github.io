import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Components/Header';
import PortfolioHomepage from './Components/PortfolioHomepage';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';

// Global styles to remove whitespace and reset browser defaults
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
  }

  // Remove default margins from headings and paragraphs
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  // Smooth scrolling for anchor links
  html {
    scroll-behavior: smooth;
  }
`;

// Main app container
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

// Section wrapper to handle fixed header spacing
const SectionWrapper = styled.div`
  &:first-of-type {
    // Add top padding for the first section to account for fixed header
    padding-top: 80px; // Adjust based on your header height
    
    @media (max-width: 767px) {
      padding-top: 120px; // More padding on mobile since header is taller
    }
    
    @media (max-width: 375px) {
      padding-top: 100px;
    }
  }
`;

function App() {
  return (
    <>
      {/* Apply global styles */}
      <GlobalStyle />
      
      <AppContainer>
        <Header />

        {/* Optional Home section (for logo scroll) */}
        <div id="home">
          {/* If you have a hero or top content, put it here */}
        </div>

        <SectionWrapper id="portfolio">
          <PortfolioHomepage />
        </SectionWrapper>

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
      </AppContainer>
    </>
  );
}

export default App;