import styled from "styled-components";
import { LargeButton } from "../styles/components";
import {
  ffSansCondStyle,
  ffSerifStyle,
  fs500Style,
  fs900Style,
  letterSpacing1,
  uppercase
} from "../styles/typography";
import { bgWhite, block, GridContainer, textAccent, textDark, textWhite } from "../styles/utility";

export const HomeDiv = styled(GridContainer)`
  height: 86vh;
  h1 {
    ${textAccent}
    ${fs500Style}
    ${ffSansCondStyle}
    ${uppercase}
    ${letterSpacing1}
  }
  h1 > span {
    ${block}
    ${fs900Style}
    ${ffSerifStyle}
    ${textWhite}
  }
  @media (min-width: 45em) {
    padding-bottom: max(6rem, 20vh);
    align-items: end;
  }
`;

export const HomeButton = styled(LargeButton)`
  ${uppercase}
  ${ffSerifStyle}
  ${textDark}
  ${bgWhite}
`;
