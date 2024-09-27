// Header.js
import React from 'react';
import styled from 'styled-components';
import airbnbLogo from '../../images/airbnbLogo.png'
import globeIcon from '../../images/GlobeIcon.png'
import menuIcon from '../../images/MenuIcon.png'
import profileIcon from '../../images/ProfileIcon.jpeg'

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Logo = styled.img`
  width: 40px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const LinkText = styled.a`
  margin-left: 20px;
  font-size: 16px;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 24px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
`;

// Main Header Component
const Header = () => {
  return (
    <HeaderContainer>
      {/* Left Side (Logo) */}
      <Logo 
        src={airbnbLogo} // replace with actual logo path
        alt="Airbnb Logo"
        onClick={() => alert('Logo Clicked!')} // Replace with navigation logic
      />

      {/* Middle Links */}
      <NavLinks>
        <LinkText onClick={() => alert('Host Your Home Clicked!')}>Airbnb your home</LinkText>
        <Icon 
          src={globeIcon} // replace with actual globe icon path
          alt="Language Selector"
          onClick={() => alert('Language Selector Clicked!')} // Replace with actual functionality
        />
      </NavLinks>

      {/* Right Side (Profile/Menu) */}
      <IconContainer onClick={() => alert('Profile Menu Clicked!')}>
        <Icon 
          src={menuIcon}  // replace with actual menu icon path
          alt="Menu Icon"
        />
        <Icon 
          src={profileIcon} // replace with actual profile icon path
          alt="Profile Icon"
        />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
