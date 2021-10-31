import { Header } from "../Header";
import { Home } from "../Home";
import { SkipToContent } from "./App.styles";
import { Route, Switch } from "react-router-dom";
import { Technology } from "../Technology";
import { Crew } from "../Crew";
import { Destination } from "../Destination";

function App() {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/technology", name: "Technology", Component: Technology },
    { path: "/crew", name: "Crew", Component: Crew },
    { path: "/destination", name: "Destination", Component: Destination }
  ];
  return (
    <>
      <SkipToContent href="#main">Skip content</SkipToContent>

      <Header routes={routes} />
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Switch>
    </>
  );
}

export default App;
