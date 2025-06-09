import React from 'react';
import styled, { keyframes } from 'styled-components';
import port from './pics/port.jpg'; // Adjust the path as necessary

// Floating animation for stars
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(10deg); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
`;

// Main container
const Homecontanaire = styled.div`
  display: flex;
  align-items: center;
  min-height: 400px;
  background: linear-gradient(135deg, #8B4F9F 0%, #5B2A86 50%, #4A1E6B 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 0;
`;

// Left side with image and overlaid text
const ImageSection = styled.div`
  position: relative;
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Image container
const Pic = styled.div`
  width: 400px;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: 10;

  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 320px;
    height: 400px;
  }
`;

// Large PORTFOLIO text overlay
const PortfolioOverlay = styled.div`
  position: absolute;
  top: 23%;
  left: 100%;
  transform: translate(-50%, -50%);
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 10rem;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  z-index: 10;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

// Bottom left description text
const DescriptionBox = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  max-width: 350px;
  background: rgba(139, 79, 159, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  z-index: 15;
  
  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    max-width: none;
  }
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  color: white;
  font-weight: 400;
`;

// Right side - background pattern area
const BackgroundSection = styled.div`
  flex: 1;
  height: 100vh;
  position: relative;

`;
const BackgroundText = styled.div`
  position: absolute;
  top: ${props => props.top || '23%'};
left: 100%;  
transform: translate(-50%, -50%);
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 10rem;
  color: rgba(255, 255, 255, 0.05);
  letter-spacing: 0.1em;
  z-index: 1;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

// Decorative stars
const Star = styled.div`
  position: absolute;
  color: #FFD700;
  font-size: ${props => props.size || '2rem'};
  animation: ${props => props.sparkle ? sparkle : float} ${props => props.duration || '4s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  z-index: 20;
`;

const StarOne = styled(Star)`
  top: 15%;
  left: 8%;
  font-size: 3rem;
`;

const StarTwo = styled(Star)`
  top: 12%;
  left: 12%;
  font-size: 2rem;
`;

const StarThree = styled(Star)`
  bottom: 35%;
  right: 25%;
  font-size: 2.5rem;
`;

const StarFour = styled(Star)`
  bottom: 20%;
  left: 35%;
  font-size: 2rem;
`;

const PortfolioHomepage = () => {
  return (
    <Homecontanaire>
      {/* Decorative Stars */}
      <StarOne delay="0s" duration="5s">✦</StarOne>
      <StarTwo delay="1s" duration="4s" sparkle>✦</StarTwo>
      <StarThree delay="2s" duration="6s">✦</StarThree>
      <StarFour delay="0.5s" duration="4.5s" sparkle>✦</StarFour>
      
      {/* Left Image Section */}
      {/* Left Image Section */}
<ImageSection>
  <Pic>
    <img src={port} alt="Portfolio" />
  </Pic>
  
  {/* Large PORTFOLIO text overlay */}
  <PortfolioOverlay>
    PORTFOLIO
  </PortfolioOverlay>
  
  {/* Background texts */}
  <BackgroundText top="42%">PORTFOLIO</BackgroundText>
<BackgroundText top="61%">PORTFOLIO</BackgroundText>
<BackgroundText top="81%">PORTFOLIO</BackgroundText>
  {/* Bottom description */}
  <DescriptionBox>
    <DescriptionText>
      I'm a front-end developer who cares about clean design, smooth experiences, and meaningful projects.
    </DescriptionText>
  </DescriptionBox>
</ImageSection>

{/* Right Background Section */}
<BackgroundSection>
</BackgroundSection>
    </Homecontanaire>
  );
};

export default PortfolioHomepage;