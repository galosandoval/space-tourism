import { css } from "styled-components";

export const flex = css`
  display: flex;
  gap: ${(p) => (p.gap ? `${p.gap}rem` : "1rem")};
`;
export const grid = css`
  display: flex;
  gap: ${(p) => (p.gap ? `${p.gap}rem` : "1rem")};
`;
export const container = css`
  padding-inline: 2em;
  margin-inline: auto;
  max-width: 80rem;
`;
export const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
