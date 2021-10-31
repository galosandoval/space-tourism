import styled from "styled-components/macro";
import { tabList, underlineIndicators } from "../styles/components";
import { GridContainer } from "../styles/layout";
import {
  ffSansCondStyle,
  ffSerifStyle,
  fs200Style,
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
    @media (min-width: 35em) {
      ${flex}
      justify-self: start;
      margin-top: 2rem;
    }
  }

  grid-template-areas: "title" "image" "tabs" "content";
  img {
    grid-area: image;
    max-width: 60%;
  }

  @media (min-width: 45em) {
    justify-items: start;
    align-content: start;
    grid-template-areas:
      ". title title ."
      ". image tabs ."
      ". image content .";
    h1 {
      width: max-content;
    }
    img {
      max-width: 90%;
    }
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
    justify-content: space-evenly;
    border-top: 1px solid hsl(${colorWhite} / 0.1);
    margin-top: 2.5rem;
    padding-top: 2.5rem;

    & > div > h3 {
      ${textAccent}
      ${fs200Style}
    ${uppercase}
    }
    & > div > p {
      font-size: 1.75rem;
      ${ffSerifStyle}
      ${uppercase}
    }
  }
  @media (min-width: 45em) {
    & > div {
      justify-content: start;
      gap: 6rem;
    }
  }
`;
