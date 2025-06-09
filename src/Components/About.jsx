import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: linear-gradient(135deg, #fef7ed 0%, #fef3c7 50%, #fde68a 100%);
  position: relative;
  overflow: hidden;
  padding: 4rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 5rem;
    right: 5rem;
    width: 8rem;
    height: 8rem;
    background: #fbbf24;
    border-radius: 50%;
    opacity: 0.3;
    filter: blur(2rem);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 8rem;
    left: 4rem;
    width: 6rem;
    height: 6rem;
    background: #f59e0b;
    border-radius: 50%;
    opacity: 0.4;
    filter: blur(1.5rem);
  }
`;

const LeftContent = styled.div`
  flex: 1;
  max-width: 32rem;
  position: relative;
`;

const Title = styled.h1`
  font-family: "Irish Grover", system-ui;
  font-size: 4rem;
  font-weight: bold;
  color: #374151;
  line-height: 1.1;
  margin-bottom: 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  &::after {
    content: '✦';
    position: absolute;
    top: -1rem;
    right: -1rem;
    color: #fbbf24;
    font-size: 3rem;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const Description = styled.p`
  font-family: "Inria Sans", sans-serif;
  font-size: 1.25rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CVSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  
  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const CVText = styled.span`
  color: #374151;
  font-weight: 500;
`;

const DownloadButton = styled.button`
  background: #7c3aed;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #6d28d9;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DecorativeShapes = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  
  @media (max-width: 768px) {
    width: 16rem;
    height: 16rem;
  }
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }
  
  &::before {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    opacity: 0.2;
    animation-delay: 0s;
  }
  
  &::after {
    width: 75%;
    height: 75%;
    top: 12.5%;
    left: 12.5%;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    opacity: 0.3;
    animation-delay: 1s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
  }
`;

const About = () => {
  return (
    <AboutContainer>
     
      
        <LeftContent>
          <Title>Hello ,<br />I'm Soule !</Title>
          <Description>
            a frontend developer with a designer's eye. I build modern, responsive websites with clean code and creative UI. From wireframes to interactive interfaces, I turn ideas into beautiful, user-friendly experiences
          </Description>
          <CVSection>
            <CVText>Here's My CV</CVText>
            <DownloadButton>free download</DownloadButton>
          </CVSection>
        </LeftContent>
        
        <RightContent>
          <DecorativeShapes />
        </RightContent>
    </AboutContainer>
  );
}

export default About;