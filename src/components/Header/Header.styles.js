import styled from "styled-components";
import { PrimaryNavigation, underlineIndicators } from "../styles/components";
import { ffSansCondStyle, letterSpacing2, uppercase } from "../styles/typography";
import { flex, textWhite } from "../styles/utility";

export const HeaderNav = styled.nav`
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
`;

export const PrimaryHeader = styled.header`
  ${flex}
`;
