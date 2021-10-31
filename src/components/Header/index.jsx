import React, { useLayoutEffect, useState } from "react";
import { HeaderNav, MobileNavToggle, PrimaryHeader } from "./Header.styles";
import logo from "../../assets/shared/logo.svg";
import { Logo } from "../styles/components";
import { NavLink, useLocation } from "react-router-dom";
import homeMobile from "../../assets/home/background-home-mobile.jpg";
import homeTablet from "../../assets/home/background-home-tablet.jpg";
import homeDesktop from "../../assets/home/background-home-desktop.jpg";
import desMobile from "../../assets/destination/background-destination-mobile.jpg";
import desTablet from "../../assets/destination/background-destination-tablet.jpg";
import desDesktop from "../../assets/destination/background-destination-desktop.jpg";

const initialMobileMenuState = {
  isOpen: false,
  class: ""
};

export const Header = ({ routes }) => {
  const [mobileMenu, setMobileMenu] = useState(initialMobileMenuState);

  const location = useLocation();

  const handleClick = () => {
    mobileMenu.isOpen
      ? setMobileMenu((state) => ({ isOpen: !state.isOpen, class: "" }))
      : setMobileMenu((state) => ({ isOpen: !state.isOpen, class: "show-menu" }));
  };

  useLayoutEffect(() => {
    const width = window.innerWidth;
    if (location.pathname === "/") {
      if (width < 560) {
        document.body.style.backgroundImage = `url(${homeMobile})`;
      } else if (width < 720) {
        document.body.style.backgroundImage = `url(${homeTablet})`;
      } else {
        document.body.style.backgroundImage = `url(${homeDesktop})`;
      }
    } else if (location.pathname === "/technology") {
    } else if (location.pathname === "/crew") {
    } else if (location.pathname === "/destination") {
      if (width < 560) {
        document.body.style.backgroundImage = `url(${desMobile})`;
      } else if (width < 720) {
        document.body.style.backgroundImage = `url(${desTablet})`;
      } else {
        document.body.style.backgroundImage = `url(${desDesktop})`;
      }
    }
  }, [location]);

  return (
    <PrimaryHeader>
      <div>
        <Logo src={logo} alt="space tourism logo" />
      </div>
      <MobileNavToggle onClick={handleClick} active={mobileMenu.isOpen}>
        <span aria-expanded={mobileMenu.isOpen}>Menu</span>
      </MobileNavToggle>
      <HeaderNav gap={"clamp(1.5rem, 5vw, 3.5rem)"}>
        <ul id="primary-navigation" className={mobileMenu.class}>
          {routes.map((route, index) => (
            <li key={route.path}>
              <NavLink to={route.path} exact activeClassName="active">
                <span aria-hidden="true">0{index}</span>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </HeaderNav>
    </PrimaryHeader>
  );
};
