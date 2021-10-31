import styled from "styled-components";
import { tabList, underlineIndicators } from "../styles/components";
import { ffSansCondStyle, ffSerifStyle, fs800Style, letterSpacing2, numberedTitle, uppercase } from "../styles/typography";
import { bgDark, flex, GridContainer, textAccent } from "../styles/utility";

export const DestinationContainer = styled(GridContainer)`
  h1 {
    ${numberedTitle}
  }
  article h2 {
    ${fs800Style}
    ${uppercase}
    ${ffSerifStyle}
  }
`

export const DestinationDiv = styled(tabList)`
  ${underlineIndicators}
  ${flex}
  button {
    ${uppercase}
    ${ffSansCondStyle}
    ${textAccent}
    ${bgDark}
    ${letterSpacing2}
  }
`