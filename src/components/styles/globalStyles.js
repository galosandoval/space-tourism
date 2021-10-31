import { createGlobalStyle } from "styled-components";
import { bgImage } from "./pages";
import { ffSansNormalStyle, fs400Style } from "./typography";
import { colorDark, colorWhite } from "./variables";

export const GlobalStyle = createGlobalStyle`
  *,
*::before,
*::after {
  box-sizing: border-box;
}

/* https://piccalil.li/blog/a-modern-css-reset */

body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6
p {
  font-weight: 400;
}

body {
  ${ffSansNormalStyle}
  ${fs400Style}
  color: hsl(${colorWhite});
  background-color: hsl(${colorDark});
  line-height: 1.5;
  min-height: 100vh;

  display: grid;
  grid-template-rows: min-content 1fr;

  overflow-x: hidden;
  background-size: cover;
  background-position: bottom center;

  /* ${bgImage} */
}
img,
picture {
  max-width: 100%;
  display: block;
}
input,
button,
textarea,
select {
  font: inherit;
}
/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// React-router animations
.fade-enter,
.fade-exit {
  transition: .5s;
}
.fade-enter,
.fade-exit-active {
  opacity: 0;
  transform: translateY(100%)
}
.fade-enter-active {
  opacity: 1;
  z-index: 1;
  transform: translateY(0)

}
`;
