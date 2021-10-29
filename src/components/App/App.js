import { Header } from "../Header";
import { Home } from "../Home";
import { SkipToContent } from "./App.styles";

function App() {
  return (
    <>
      <SkipToContent href="#main">Skip content</SkipToContent>
      <Header />
      <Home />
    </>
  );
}

export default App;
