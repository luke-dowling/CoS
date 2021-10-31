import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Start } from "./Start";
import { EpOne } from "./Episodes/EpOne";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/start" component={Start} />
        <Route exact path="/episode-one" component={EpOne} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
