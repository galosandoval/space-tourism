import styled from "styled-components";
import { tabList, underlineIndicators } from "../styles/components";
import { GridContainer } from "../styles/layout";
import {
  ffSansCondStyle,
  ffSerifStyle,
  fs200Style,
  fs500Style,
  fs800Style,
  letterSpacing2,
  numberedTitle,
  uppercase
} from "../styles/typography";
import { bgDark, flex, flow, textAccent } from "../styles/utility";
import { colorWhite } from "../styles/variables";

export const DestinationContainer = styled(GridContainer)`
  ${flow}
  h1 {
    ${numberedTitle}
  }

  grid-template-areas: "title" "image" "tabs" "content";
  img {
    grid-area: image;
    max-width: 60%;
  }
`;

export const TabContainer = styled(tabList)`
  ${underlineIndicators}
  ${flex}
  button {
    ${uppercase}
    ${ffSansCondStyle}
    ${textAccent}
    ${bgDark}
    ${letterSpacing2}
  }

  grid-area: tabs;
`;

export const DestinationInfo = styled.article`
  h2 {
    ${fs800Style}
    ${uppercase}
    ${ffSerifStyle}
  }

  grid-area: content;

  & > div {
    ${flex}
    flex-direction: column;
    border-top: 1px solid hsl(${colorWhite} / 0.1);
    margin-top: 2.5rem;
    padding-top: 2.5rem;
    
    & > div > h3 {
      ${textAccent}
      ${fs200Style}
    ${uppercase}
    }
    & > div > p {
      ${fs500Style}
      ${ffSerifStyle}
      ${uppercase}
    }
  }
`;
