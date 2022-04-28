import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Eat from "./Eat";
import Drink from "./Drink";
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/eat">Eat</Link>
        <Link to="/drink">Drink</Link>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/eat">
          <Eat />
        </Route>
        <Route exact path="/drink">
          <Drink />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
