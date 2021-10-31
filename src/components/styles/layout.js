import styled from "styled-components";

export const GridContainer = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  padding-bottom: 4rem;
  & * {
    max-width: 50ch;
  }

  @media (min-width: 45rem) {
    & {
      text-align: left;
      column-gap: 2rem;
      grid-template-columns: minmax(2em, 1fr) minmax(0, 30rem) minmax(0, 30rem) minmax(2em, 1fr);
      /* grid-template-columns: 2em repeat(2, minmax(0, 40rem)) 2em; same as  ^^*/
    }
    & > *:first-child {
      grid-column: 2;
    }
    & > *:last-child {
      grid-column: 3;
    }
  }
`;
