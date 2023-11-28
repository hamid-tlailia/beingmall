import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Recharge from "./pages/recharge";
import Withdrawal from "./pages/withdrawal";
import Teams from "./pages/teams";
import Invitation from "./pages/invitation";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/recharge">
              <Recharge />
            </Route>
            <Route path="/withdrawal">
              <Withdrawal />
            </Route>
            <Route path="/teams">
              <Teams />
            </Route>
            <Route path="/invitaion">
              <Invitation />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
