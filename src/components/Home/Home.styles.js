import styled from "styled-components";
import {
  ffSansCondStyle,
  ffSerifStyle,
  fs500Style,
  fs900Style,
  letterSpacing1,
  uppercase
} from "../styles/typography";
import { gridContainer, textAccent, textWhite } from "../styles/utility";

export const HomeDiv = styled.div`
  ${gridContainer}
  h1 {
    ${textAccent}
    ${fs500Style}
    ${ffSansCondStyle}
    ${uppercase}
    ${letterSpacing1}
  }
  h1 > span {
    display: block;
    ${fs900Style}
    ${ffSerifStyle}
    ${textWhite}
  }
`;
