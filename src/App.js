import GlobalStyle from "./style/GlobalStyle";
import "./style.css";
import Timer from "./container/Timer";
import DayDiff from "./container/DayDiff";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/df">
            <DayDiff></DayDiff>
          </Route>
          <Route path="/">
            <Timer></Timer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
