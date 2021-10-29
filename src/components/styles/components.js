import styled, { css } from "styled-components";
import { ffSerifStyle, fs600Style } from "./typography";
import { flex, gap } from "./utility";
import { colorDark, colorLight, colorWhite } from "./variables";

export const LargeButton = styled.a`
  font-size: 2rem;
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  padding: 0 2em;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;

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
    padding: var(--underline-gap, 1rem) 0;
    border: 0;
    border-bottom: 0.2rem solid hsl(${colorWhite} / 0);
    transition: 0.3s all;
  }
  & > *:focus {
    border-color: hsl(${colorWhite} / 0.5);
  }
  @media (hover: hover) {
    & > *:hover {
      border-color: hsl(${colorWhite} / 0.5);
    }
  }
  @media (min-width: 35rem) {
    & > .active,
    & > [aria-selected="true"] {
      color: hsl(${colorWhite} / 1);
      border-color: hsl(${colorWhite} / 1);
    }
  }
`;

/**
 * Primary Nav
 */

export const Logo = styled.img`
  margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
`;

export const PrimaryNavigation = css`
  ${gap}
  --underline-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  background: hsl(${colorWhite} / 0.05);
  backdrop-filter: blur(1.5rem);

  a {
    text-decoration: none;
  }
  a > span {
    font-weight: 700;
    margin-right: 0.5em;
  }

  @media (max-width: 35rem) {
    --underline-gap: 0.5rem;
    position: fixed;
    z-index: 1000;
    // new property top, right, bottom, left
    inset: 0 0 0 20%;
    padding: min(20rem, 15vh) 2rem;
    flex-direction: column;
    list-style: none;
    margin: 0;
    transform: translateX(100%);
    transition: transform 500ms ease-in-out;
    & > .active {
      border: 0;
    }
  }
  @media (min-width: 35em) and (max-width: 45em) {
    padding-inline: 3rem;
    a > span {
      display: none;
    }
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
