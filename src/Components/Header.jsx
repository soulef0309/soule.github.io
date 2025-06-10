import React from "react";
import styled from "styled-components";

// Base Header Container with responsive styles
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  overflow-x: hidden;
  width: 100%;

  // Extra Large Screens (1440px and above)
  @media (min-width: 1440px) {
    padding: 25px 80px;
  }

  // Large Screens (1024px - 1439px)
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 20px 50px;
  }

  // Tablets (768px - 1023px)
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 15px 30px;
  }

  // Mobile Screens (up to 767px)
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 15px 20px;
    gap: 15px;
  }

  // Small Mobile Screens (up to 375px)
  @media (max-width: 375px) {
    padding: 10px 15px;
  }
`;

// Logo with responsive typography
const Logo = styled.div`
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #F9B939;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  flex: 1;

  // Responsive font sizes
  font-size: 36px;

  @media (max-width: 1439px) {
    font-size: 32px;
  }

  @media (max-width: 1023px) {
    font-size: 28px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }
`;

// Navigation List with responsive layout
const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1023px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    position: static;
    transform: none;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
`;

// Navigation Item with responsive typography and hover effects
const NavItem = styled.li`
  font-family: "Inria Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
  cursor: pointer;
  color: #F9B939;
  padding: 8px 16px;
  border-radius: 25px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  text-transform: capitalize;
  white-space: nowrap;

  // Responsive font sizes
  font-size: 20px;

  @media (max-width: 1439px) {
    font-size: 18px;
    padding: 6px 14px;
  }

  @media (max-width: 1023px) {
    font-size: 16px;
    padding: 5px 12px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 4px 10px;
  }

  // Hover and active states remain the same
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #F9B939, rgba(249, 185, 57, 0.8));
    border-radius: 25px;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(249, 185, 57, 0.3);

    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const Header = () => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <HeaderContainer>
      <Logo>soule</Logo>
      <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            onClick={() => {
              const section = document.getElementById(item.id);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {item.name}
          </NavItem>
        ))}
      </NavList>
    </HeaderContainer>
  );
};

export default Header;
