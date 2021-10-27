import styled from "styled-components";
import { bgDark, flex } from "../../utility/styles/utility";

const Container = styled.div`
  ${flex}
  border: --clr-red solid 3px;
  ${bgDark}
  /* border: red solid 3px; */
`;

function App() {
  return <Container>h1</Container>;
}

export default App;
