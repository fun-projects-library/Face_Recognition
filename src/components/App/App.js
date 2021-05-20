import React from "react"
import './App.css';
import Detect from "../Detect/Detect"
import NavBar from "../NavBar/NavBar"
import Error from "../Error/Error"
import Main from "../Main/Main";
import Verify from "../Verify/Verify"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  
  return (
    <>
      <Router>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/detectFace"> <Detect /> </Route>
          {/* <Route path="/error"> <Error /> </Route> */}
          <Route path="/" exact strict component={Main} />
          <Route path="/verify"> <Verify /> </Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
