import { css } from "styled-components";
import {
  ffSansCond,
  ffSansNormal,
  ffSerif,
  fs200,
  fs300,
  fs400,
  fs500,
  fs600,
  fs700,
  fs800,
  fs900
} from "./variables";

export const ffSerifStyle = css`
  font-family: ${ffSerif};
`;
export const ffSansCondStyle = css`
  font-family: ${ffSansCond};
`;
export const ffSansNormalStyle = css`
  font-family: ${ffSansNormal};
`;

export const letterSpacing1 = "letter-spacing: 4.75px";
export const letterSpacing2 = "letter-spacing: 2.7px";
export const letterSpacing3 = "letter-spacing: 2.35px";

export const uppercase = "text-transform: uppercase";

export const fs900Style = css`
  font-size: ${fs900};
  line-height: 1.1;
`;
export const fs800Style = css`
  font-size: ${fs800};
  line-height: 1.1;
`;
export const fs700Style = css`
  font-size: ${fs700};
  line-height: 1.1;
`;
export const fs600Style = css`
  font-size: ${fs600};
  line-height: 1.1;
`;
export const fs500Style = css`
  font-size: ${fs500};
`;
export const fs400Style = css`
  font-size: ${fs400};
`;
export const fs300Style = css`
  font-size: ${fs300};
`;
export const fs200Style = css`
  font-size: ${fs200};
`;
