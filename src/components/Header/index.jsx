import React, { useState } from "react";
import { HeaderNav, MobileNavToggle, PrimaryHeader } from "./Header.styles";
import logo from "../../assets/shared/logo.svg";
import { Logo } from "../styles/components";

const initialMobileMenuState = {
  isOpen: false,
  class: ""
};

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(initialMobileMenuState);

  const handleClick = () => {
    mobileMenu.isOpen
      ? setMobileMenu((state) => ({ isOpen: !state.isOpen, class: "" }))
      : setMobileMenu((state) => ({ isOpen: !state.isOpen, class: "show-menu" }));
  };

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
          <li className="active">
            <a href="index.html">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li>
            <a href="destination.html">
              <span aria-hidden="true">01</span>Destination
            </a>
          </li>
          <li>
            <a href="crew.html">
              <span aria-hidden="true">02</span>Crew
            </a>
          </li>
          <li>
            <a href="technology.html">
              <span aria-hidden="true">03</span>Technology
            </a>
          </li>
        </ul>
      </HeaderNav>
    </PrimaryHeader>
  );
};
