import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Start } from "./Start";
import { EpOne } from "./Episodes/EpOne";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cos" component={Home} />
        <Route exact path="/cos/start" component={Start} />
        <Route exact path="/cos/episode-one" component={EpOne} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
