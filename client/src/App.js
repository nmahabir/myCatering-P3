import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
// import { Firebase, storage, FirebaseContext } from "./components/Firebase";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

class App extends Component {
  render() {
    // console.log(storage)
    return (
      <Router>
        <div>
        <Nav/>
        <Jumbotron/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
        </Switch>        
        </div>
      </Router>
      
    );
  }
}

export default App;
