import React, { useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import logoImage from "../Assets/MainLogo/MainLogo.svg"; // Corrected path

const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  width: 100%;
  max-width: 1920px;
  height: 247px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 1080px) {
    height: 216px;
    max-width: 1080px;
  }
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 1080px) {
    margin-bottom: 0;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;

  @media (max-width: 1080px) {
    img {
      height: 133px;
      width: 133px;
    }
  }
`;

const LogoImage = styled.img`
  height: 111px;
  width: 111px;
`;

const RightBar = styled.div`
  display: flex;
  align-items: center;
`;

const JoinUsPartnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const JoinUs = styled.div`
  font-size: 1rem;
  color: #451a64;
  margin-left: 20px;
  font-weight: 500;
`;

const Partner = styled.div`
  font-size: 1rem;
  color: #451a64;
  margin-left: 290px;
  font-weight: 500;
`;

const Navigation = styled.nav`
  position: absolute;
  bottom: 60px;
  width: 100%;
  text-align: center;

  @media (max-width: 1080px) {
    display: none;
  }
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
  margin: 0 80px;
  font-weight: 400;
  font-style: normal;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1080px) {
    display: block;
    position: absolute;
    top: 52px;
    right: 20px;
    font-size: 66px;
    line-height: 66px;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-out;

  @media (max-width: 1080px) {
    width: 80%;
    right: 10%;
    top: 80px;
  }
`;

const MobileNavItem = styled.a`
  font-size: 1rem;
  color: black;
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    background-color: #f0f0f0;
  }
`;

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen((prev) => !prev);
  }, []);

  return (
    <HeaderContainer>
      <TopBar>
        <Logo>
          <LogoImage
            src={logoImage}
            alt="Logo"
            onError={(e) => (e.target.src = "fallbackLogo.svg")}
          />
        </Logo>
        <RightBar>
          <JoinUsPartnerContainer>
            <Partner>Partner with LAND Interiors</Partner>
            <JoinUs>Join as Design Expert</JoinUs>
          </JoinUsPartnerContainer>
        </RightBar>
      </TopBar>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <a href="#about">About</a>
          </NavigationItem>
          <NavigationItem>
            <a href="#projects">Projects</a>
          </NavigationItem>
          <NavigationItem>
            <a href="#studio">Studio</a>
          </NavigationItem>
          <NavigationItem>
            <a href="#blog">Blog</a>
          </NavigationItem>
          <NavigationItem>
            <a href="#contact">Contact</a>
          </NavigationItem>
        </NavigationList>
      </Navigation>
      <HamburgerMenu
        onClick={toggleMobileNav}
        aria-controls="mobile-nav"
        aria-expanded={isMobileNavOpen}
      >
        ☰
      </HamburgerMenu>
      {isMobileNavOpen && (
        <MobileNav id="mobile-nav">
          <MobileNavItem href="#about">About</MobileNavItem>
          <MobileNavItem href="#projects">Projects</MobileNavItem>
          <MobileNavItem href="#studio">Studio</MobileNavItem>
          <MobileNavItem href="#blog">Blog</MobileNavItem>
          <MobileNavItem href="#contact">Contact</MobileNavItem>
        </MobileNav>
      )}
    </HeaderContainer>
  );
};

export default Header;
