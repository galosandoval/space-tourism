import React, { useState } from "react";
import { HeaderNav, MobileNavToggle, PrimaryHeader } from "./Header.styles";
import logo from "../../assets/shared/logo.svg";
import { Logo } from "../styles/components";
import { NavLink } from "react-router-dom";

const initialMobileMenuState = {
  isOpen: false,
  class: ""
};

export const Header = ({ routes }) => {
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
