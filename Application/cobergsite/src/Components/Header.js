import React from 'react';
import styled from 'styled-components';
import logoImage from '../Assets/MainLogo/MainLogo.svg'; // Corrected path

// Styled components for the header elements
const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

const LogoImage = styled.img`
  height: 50px; /* Adjust height as needed */
`;

const RightBar = styled.div`
  display: flex;
  align-items: center;
`;

const JoinUs = styled.div`
  font-size: 1rem;
  color: #451a64;
  margin-left: 20px;
`;

const Partner = styled.div`
  font-size: 1rem;
  color: #451a64;
  margin-left: 20px;
`;

const Navigation = styled.nav`
  text-align: center;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.li`
  font-size: 1rem;
  color: black;
  margin: 0 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TopBar>
        <Logo>
          <LogoImage src={logoImage} alt="Logo" />
        </Logo>
        <RightBar>
          <Partner>Partner with LAND Interiors</Partner>
          <JoinUs>Join as Design Expert</JoinUs>
        </RightBar>
      </TopBar>
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
