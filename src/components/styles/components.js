import styled, { css } from "styled-components";
import { ffSerifStyle, fs600Style, letterSpacing2, uppercase } from "./typography";
import { flex, textDark, textWhite } from "./utility";
import { colorDark, colorLight, colorWhite } from "./variables";

export const LargeButton = styled.a`
  ${uppercase}
  ${ffSerifStyle}
  ${fs600Style}
  ${textDark}
  
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  padding: 0 2em;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;
  background-color: hsl(${colorWhite});

  &::after {
    content: "";
    position: absolute;
    background: hsl(${colorWhite} / 0.15);
    width: 100%;
    height: 100%;
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 500ms linear, transform 500ms ease-in-out;
  }
  &:hover::after,
  &:focus::after {
    transform: scale(1.5);
    opacity: 1;
  }
`;

export const underlineIndicators = css`
  // all direct descendents with *
  & > * {
    cursor: pointer;
    padding: ${(p) => (p.uGap ? `${p.uGap}rem 0` : "1rem 0")};
    border: 0;
    border-bottom: 0.2rem solid hsl(${colorWhite} / 0);
    transition: 0.3s all;
  }
  & > *:hover,
  & > *:focus {
    border-color: hsl(${colorWhite} / 0.5);
  }
  & > .active,
  & > [aria-selected="true"] {
    color: hsl(${colorWhite} / 1);
    border-color: hsl(${colorWhite} / 1);
  }
`;

export const PrimaryNavigation = css`
  gap: 8rem;
  list-style: none;
  padding: 0;
  margin: 0;
  /* ${underlineIndicators} */

  a {
    text-decoration: none;
    /* ${uppercase}
    ${textWhite}
    ${letterSpacing2} */
  }
  a > span {
    font-weight: 700;
    margin-right: 0.5em;
  }
`;

export const tabList = styled.div`
  gap: 2rem;
`;

export const DotIndicators = styled.div`
  & > * {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    aspect-ratio: 1;
    padding: 0.5em;
    background-color: hsl(${colorWhite} / 0.25);
  }
  & > *:hover,
  & > *:focus {
    background-color: hsl(${colorWhite} / 0.5);
  }
  & > [aria-selected="true"] {
    background-color: hsl(${colorWhite} / 1);
  }
`;

export const NumberIndicators = styled.div`
  ${flex}
  flex-direction: column;

  & > * {
    background-color: hsl(${colorDark});
    color: hsl(${colorLight});
    border: 1px solid hsl(${colorWhite} / 0.25);
    ${ffSerifStyle}
    ${fs600Style}
    border-radius: 50%;
    padding: 0.5em;
    aspect-ratio: 1;
    width: 5rem;
    cursor: pointer;
    transition: 0.5s;
  }
  & > *:hover,
  & > *:active {
    border-color: hsl(${colorWhite} / 0.5);
  }
  & > [aria-selected="true"] {
    background-color: hsl(${colorWhite});
    color: hsl(${colorDark});
    border-color: hsl(${colorWhite} / 1);
  }
`;
