import { createGlobalStyle } from "styled-components";
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
:root {
  --clr-red : red
}
`;
