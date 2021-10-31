import styled from "styled-components/macro";
import { PrimaryNavigation, underlineIndicators } from "../styles/components";
import { ffSansCondStyle, letterSpacing2, uppercase } from "../styles/typography";
import { flex, srOnly, textWhite } from "../styles/utility";

import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";
import { colorWhite } from "../styles/variables";

export const HeaderNav = styled.nav`
  .show-menu {
    transform: translateX(0);
  }
  .active {
    border-bottom: 0.2rem solid hsl(${colorWhite} / 1);
    padding: 0 0 2rem;
  }
  ul {
    ${flex}
    ${underlineIndicators}
    ${PrimaryNavigation}
  }
  ul > li > a {
    ${ffSansCondStyle}
    ${uppercase}
    ${textWhite}
    ${letterSpacing2}
  }
  @media (max-width: 35rem) {
    .active {
      border: 0;
    }
  }
`;

export const PrimaryHeader = styled.header`
  ${flex}
  justify-content: space-between;
  align-items: center;
  order: 2;
  button > span {
    ${srOnly}
  }
  @media (min-width: 45em) {
    &::after {
      content: "";
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      background: hsl(${colorWhite} / 0.25);
      order: 1;
      margin-right: -3rem;
    }
  }
`;

export const MobileNavToggle = styled.button.attrs(() => ({
  "aria-controls": "primary-navigation"
}))`
  display: none;

  @media (max-width: 35rem) {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 1rem;
    top: 2rem;
    background: transparent;
    border: 0;
    background-image: url(${hamburgerIcon});
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    aspect-ratio: 1;

    ${(p) => p.active && ` background-image: url(${closeIcon});`}

    &:focus-visible {
      outline-offset: 5px;
      outline: 5px solid white;
    }
  }
`;
