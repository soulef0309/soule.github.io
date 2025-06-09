import React, { useState } from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  min-height: 100vh;
  background: #5B2A86;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #fbbf24;
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Irish Grover', cursive;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 600px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    height: 500px;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: white;
  transform: translateX(${props => props.offset * 100}%);
  transition: transform 0.5s ease-in-out;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const PhonePreview = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f8fafc;
`;

const PhoneFrame = styled.div`
  width: 280px;
  height: 500px;
  background: #1f2937;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: #374151;
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    width: 240px;
    height: 400px;
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const PhoneContent = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
`;

const DesktopPreview = styled.div`
  flex: 1.5;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DesktopSlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background: #1f2937;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  margin-bottom: 2rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const DesktopScreen = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
  transform: translateX(${props => props.offset * 100}%);
  transition: transform 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.1rem;
  text-align: center;
`;

const DesktopNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 15px;' : 'right: 15px;'}
  background: rgba(0,0,0,0.7);
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;
  transition: all 0.3s ease;
  z-index: 10;
  opacity: 0.7;
  
  &:hover {
    background: rgba(0,0,0,0.9);
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
`;

const DesktopDots = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

const DesktopDot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#fbbf24' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #fbbf24;
    transform: scale(1.2);
  }
`;

const ProjectDescription = styled.div`
  color: #374151;
  
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #7c3aed;
  }
  
  p {
    line-height: 1.6;
    font-size: 1rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  background: ${props => props.active ? '#fbbf24' : 'rgba(255,255,255,0.3)'};
  color: ${props => props.active ? '#7c3aed' : 'white'};
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: #fbbf24;
    color: #7c3aed;
    transform: translateY(-2px);
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  background: rgba(255,255,255,0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #7c3aed;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [desktopSlides, setDesktopSlides] = useState({});
  
  // You can add your projects here with multiple desktop interfaces
  const projects = [
    {
      id: 1,
      title: "Journaling Website",
      description: "A responsive and interactive mental health journaling app built with React. I designed and developed the full frontend, including a mood tracker calendar, custom journal themes, light/dark mode, and smooth UI transitions. Focused on clean design, user experience, and accessibility.",
      phoneImage: "", // Add your phone screenshot URL here
      desktopImages: [
        { url: "", label: "Homepage" },
        { url: "", label: "Dashboard" },
        { url: "", label: "Journal Entry" },
        { url: "", label: "Mood Tracker" },
      ], // Multiple desktop screenshots
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js. Features include product catalog, shopping cart, user authentication, payment integration, and admin dashboard. Responsive design with smooth animations and optimized performance.",
      phoneImage: "", // Add your phone screenshot URL here
      desktopImages: [
        { url: "", label: "Product Catalog" },
        { url: "", label: "Product Details" },
        { url: "", label: "Shopping Cart" },
        { url: "", label: "Checkout" },
        { url: "", label: "Admin Dashboard" },
      ],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A creative portfolio website showcasing modern web design principles. Built with React and styled-components, featuring smooth animations, interactive elements, and responsive design. Optimized for performance and accessibility.",
      phoneImage: "", // Add your phone screenshot URL here
      desktopImages: [
        { url: "", label: "Homepage" },
        { url: "", label: "About Section" },
        { url: "", label: "Projects Gallery" },
        { url: "", label: "Contact Form" },
      ],
    }
  ];
  
  // Initialize desktop slide indices
  React.useEffect(() => {
    const initialDesktopSlides = {};
    projects.forEach(project => {
      initialDesktopSlides[project.id] = 0;
    });
    setDesktopSlides(initialDesktopSlides);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const nextDesktopSlide = (projectId, maxSlides) => {
    setDesktopSlides(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % maxSlides
    }));
  };
  
  const prevDesktopSlide = (projectId, maxSlides) => {
    setDesktopSlides(prev => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + maxSlides) % maxSlides
    }));
  };
  
  const goToDesktopSlide = (projectId, index) => {
    setDesktopSlides(prev => ({
      ...prev,
      [projectId]: index
    }));
  };

  return (
    <ProjectsContainer>
      <Title>LATEST PROJECTS</Title>
      
      <SlideContainer>
        <ArrowButton direction="left" onClick={prevSlide}>
          &#8249;
        </ArrowButton>
        <ArrowButton direction="right" onClick={nextSlide}>
          &#8250;
        </ArrowButton>
        
        {projects.map((project, index) => (
          <Slide key={project.id} offset={index - currentSlide}>
            <PhonePreview>
              <PhoneFrame>
                <PhoneScreen>
                  <PhoneContent bgImage={project.phoneImage}>
                    {!project.phoneImage && (
                      <div style={{color: '#666', fontSize: '0.9rem'}}>
                        Phone Preview<br/>
                        {project.title}
                      </div>
                    )}
                  </PhoneContent>
                </PhoneScreen>
              </PhoneFrame>
            </PhonePreview>
            
            <DesktopPreview>
              <DesktopSlideContainer>
                {project.desktopImages.length > 1 && (
                  <>
                    <DesktopNavButton 
                      direction="left" 
                      onClick={() => prevDesktopSlide(project.id, project.desktopImages.length)}
                    >
                      &#8249;
                    </DesktopNavButton>
                    <DesktopNavButton 
                      direction="right" 
                      onClick={() => nextDesktopSlide(project.id, project.desktopImages.length)}
                    >
                      &#8250;
                    </DesktopNavButton>
                  </>
                )}
                
                {project.desktopImages.map((image, imgIndex) => (
                  <DesktopScreen 
                    key={imgIndex}
                    bgImage={image.url} 
                    offset={imgIndex - (desktopSlides[project.id] || 0)}
                  >
                    {!image.url && `${image.label} - ${project.title}`}
                  </DesktopScreen>
                ))}
                
                {project.desktopImages.length > 1 && (
                  <DesktopDots>
                    {project.desktopImages.map((_, imgIndex) => (
                      <DesktopDot
                        key={imgIndex}
                        active={(desktopSlides[project.id] || 0) === imgIndex}
                        onClick={() => goToDesktopSlide(project.id, imgIndex)}
                      />
                    ))}
                  </DesktopDots>
                )}
              </DesktopSlideContainer>
              
              <ProjectDescription>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectDescription>
            </DesktopPreview>
          </Slide>
        ))}
      </SlideContainer>
      
      <Navigation>
        {projects.map((_, index) => (
          <NavButton
            key={index}
            active={currentSlide === index}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </NavButton>
        ))}
      </Navigation>
    </ProjectsContainer>
  );
};

export default Projects;