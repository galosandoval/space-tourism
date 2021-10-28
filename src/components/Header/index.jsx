import React from "react";
import { HeaderNav, PrimaryHeader } from "./Header.styles";
import logo from "../../assets/shared/logo.svg";

export const Header = () => {
  return (
    <PrimaryHeader>
      <div>
        <img src={logo} alt="space tourism logo" />
      </div>
      <HeaderNav uGap={2}>
        <ul>
          <li className="active">
            <a href="index.html">
              <span>00</span>Home
            </a>
          </li>
          <li>
            <a href="destination.html">
              <span>01</span>Destination
            </a>
          </li>
          <li>
            <a href="crew.html">
              <span>02</span>Crew
            </a>
          </li>
          <li>
            <a href="technology.html">
              <span>03</span>Technology
            </a>
          </li>
        </ul>
      </HeaderNav>
    </PrimaryHeader>
  );
};
