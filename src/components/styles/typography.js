import { css } from "styled-components/macro";
import { colorWhite, ffSansCond, ffSansNormal, ffSerif } from "./variables";

export const ffSerifStyle = css`
  font-family: ${ffSerif};
`;
export const ffSansCondStyle = css`
  font-family: ${ffSansCond};
`;
export const ffSansNormalStyle = css`
  font-family: ${ffSansNormal};
`;

export const letterSpacing1 = "letter-spacing: 4.75px;";
export const letterSpacing2 = "letter-spacing: 2.7px;";
export const letterSpacing3 = "letter-spacing: 2.35px;";

export const uppercase = "text-transform: uppercase;";

export const fs900Style = css`
  font-size: var(--fs-900);
  line-height: 1.1;
`;
export const fs800Style = css`
  font-size: var(--fs-800);
  line-height: 1.1;
`;
export const fs700Style = css`
  font-size: var(--fs-700);
  line-height: 1.1;
`;
export const fs600Style = css`
  font-size: var(--fs-600);
  line-height: 1.1;
`;
export const fs500Style = css`
  font-size: var(--fs-500);
`;
export const fs400Style = css`
  font-size: var(--fs-400);
`;
export const fs300Style = css`
  font-size: var(--fs-300);
`;
export const fs200Style = css`
  font-size: var(--fs-200);
`;
export const numberedTitle = css`
  ${fs500Style}
  ${ffSansCondStyle}
  text-transform: uppercase;
  letter-spacing: 4.72px;
  span {
    margin-right: 0.5em;
    font-weight: 700;
    color: hsl(${colorWhite} / 0.25);
  }
`;
