import styled from "styled-components/macro";
import { LargeButton } from "../styles/components";
import {
  ffSansCondStyle,
  ffSerifStyle,
  fs500Style,
  fs900Style,
  letterSpacing1,
  uppercase
} from "../styles/typography";
import { bgWhite, block, textAccent, textDark, textWhite } from "../styles/utility";
import { GridContainer } from "../styles/layout";

export const HomeDiv = styled(GridContainer)`
  & > div {
    margin: 2rem 0;
  }

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

    & > *:first-child {
      grid-column: 2;
    }
    & > *:last-child {
      grid-column: 3;
    } 
  }
`;

export const HomeButton = styled(LargeButton)`
  ${uppercase}
  ${ffSerifStyle}
  ${textDark}
  ${bgWhite}
`;
