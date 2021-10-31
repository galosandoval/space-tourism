import { css } from "styled-components/macro";
import homeMobile from "../../assets/home/background-home-mobile.jpg";
import homeTablet from "../../assets/home/background-home-tablet.jpg";
import homeDesktop from "../../assets/home/background-home-desktop.jpg";

export const bgImage = css`
  background-image: url(${homeMobile});

  @media (min-width: 35rem) {
    background-position: center center;
    background-image: url(${homeTablet});
  }
  @media (min-width: 45rem) {
    background-image: url(${homeDesktop});
  }
`;
