import styled from "styled-components";
import { flex } from "../../utility/utilityStyles";

const Container = styled.div`
  ${flex}
`;

function App() {
  return (
    <div>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </div>
  );
}

export default App;
