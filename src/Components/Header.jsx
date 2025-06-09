import React  from "react";
import styled from "styled-components";

// Style for the entire header container
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
  
`;

// Style for the logo (left side)
const Logo = styled.div`
font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 36px;
  color: #F9B939;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  flex: 1;

`;

// Style for the list container (center)
const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

// Style for each list item
const NavItem = styled.li`
font-family: "Inria Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
  cursor: pointer;
  font-size: 20px;
  color: #F9B939;
  padding: 8px 16px;
  border-radius: 25px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  text-transform: capitalize;
  white-space: nowrap;
  
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

// Style for language switcher container (right side)
const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: flex-end;
`;
// Mobile responsive styles
const MobileHeaderContainer = styled(HeaderContainer)`
  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-direction: column;
    gap: 20px;
    
    ${NavList} {
      position: static;
      transform: none;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    ${LanguageSwitcher} {
      position: absolute;
      top: 20px;
      right: 20px;
      flex: none;
    }
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
    <MobileHeaderContainer>
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
    </MobileHeaderContainer>
  );
};

export default Header;
