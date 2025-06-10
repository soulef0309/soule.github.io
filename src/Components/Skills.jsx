import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f5f5;
  overflow: hidden;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const Sidebar = styled.div`
  background: #F9B939;
  width: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    width: 100%;
    min-height: 150px;
    padding: 1.5rem;
  }
`;

const SidebarTitle = styled.h1`
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
  color: #4c1d95;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const MainContent = styled.div`
  flex: 1;
  flex-shrink: 0;
  background: #3B1F17;
  display: flex;
  padding: 4rem;
  gap: 4rem;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
    padding: 3rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    gap: 2rem;
    min-height: auto;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

const SkillCategory = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    flex: none;
  }
`;

const CategoryTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: 'Irish Grover', cursive;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const SkillItem = styled.div`
  color: #d6d3d1;
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 0.5rem 0;
  border-left: 3px solid transparent;
  padding-left: 1rem;
  transition: all 0.3s ease;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.4rem 0;
    padding-left: 0.8rem;
  }
  
  &:hover {
    color: white;
    border-left-color: #f59e0b;
    transform: translateX(0.5rem);
    
    @media (max-width: 768px) {
      transform: translateX(0.2rem);
    }
  }
`;

const SoftwareSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const SoftwareCategory = styled.div`
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

const SoftwareName = styled.h3`
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
`;

const SoftwareDescription = styled.p`
  color: #d6d3d1;
  font-size: 1rem;
  line-height: 1.5;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <Sidebar>
        <SidebarTitle>Skills</SidebarTitle>
      </Sidebar>
      
      <MainContent>
        <SkillCategory>
          <CategoryTitle>Software Skills</CategoryTitle>
          <SoftwareSkills>
            <SoftwareCategory>
              <SoftwareName>Figma</SoftwareName>
              <SoftwareDescription>
                UI/UX design, wireframes, and prototypes
              </SoftwareDescription>
            </SoftwareCategory>
            
            <SoftwareCategory>
              <SoftwareName>Canva</SoftwareName>
              <SoftwareDescription>
                graphics, social posts, icons
              </SoftwareDescription>
            </SoftwareCategory>
          </SoftwareSkills>
        </SkillCategory>
        
        <SkillCategory>
          <CategoryTitle>Coding Skills</CategoryTitle>
          <SkillsList>
            <SkillItem>HTML5 / CSS3</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Bootstrap</SkillItem>
            <SkillItem>Styled-Components</SkillItem>
            <SkillItem>Git & GitHub</SkillItem>
            <SkillItem>Basic PHP & MySQL</SkillItem>
          </SkillsList>
        </SkillCategory>
      </MainContent>
    </SkillsContainer>
  );
};

export default Skills;