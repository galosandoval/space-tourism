import styled from "styled-components/macro";
import { colorWhite } from "../styles/variables";

export const SkipToContent = styled.a`
  position: absolute;
  z-index: 9999;
  background: hsl(${colorWhite});
  padding: 0.5em 1em;
  margin-inline: auto;
  transform: translateY(-100%);
  transition: transform 250ms ease-in;

  &:focus {
    transform: translateY(0);
  }
`;
