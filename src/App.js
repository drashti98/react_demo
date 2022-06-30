import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
