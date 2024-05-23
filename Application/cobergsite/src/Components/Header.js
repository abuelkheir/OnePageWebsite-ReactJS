import React from 'react';
import styled from 'styled-components';
import logoImage from '../Asssets/MainLogo/MainLogo.png'; // Updated import path for the logo image

// Styled components for the header elements
const HeaderContainer = styled.header`
  background-color: #f8f8f8; /* Setting the background color */
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  float: left; /* Aligning the logo to the left */
`;

const JoinUs = styled.div`
  font-size: 1rem;
  color: #451a64; /* Setting the font color */
  float: right; /* Aligning "Join us" to the right */
`;

const Partner = styled.div`
  font-size: 1rem;
  color: #451a64; /* Setting the font color */
  float: right; /* Aligning "Partner with LAND Interiors" to the right */
  margin-right: 20px; /* Adding space between "Join us" and "Partner with LAND Interiors" */
`;

const Navigation = styled.nav`
  clear: both; /* Clearing the floats */
  margin-top: 30px; /* Adding margin to separate navigation from logo and "Join us" */
  text-align: center; /* Aligning navigation links to center */
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center; /* Centering navigation links horizontally */
`;

const NavigationItem = styled.li`
  font-size: 1rem;
  color: black;
  margin: 0 10px; /* Adding margin between navigation links */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logoImage} alt="Logo" /> {/* Displaying the logo image */}
      </Logo>
      <JoinUs>Join as Design Expert</JoinUs>
      <Partner>Partner with LAND Interiors</Partner>
      <Navigation>
        <NavigationList>
          <NavigationItem>About</NavigationItem>
          <NavigationItem>Projects</NavigationItem>
          <NavigationItem>Studio</NavigationItem>
          <NavigationItem>Blog</NavigationItem>
          <NavigationItem>Contact</NavigationItem>
        </NavigationList>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
