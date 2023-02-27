import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
