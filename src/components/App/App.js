import React from "react"
import './App.css';
import Detect from "../Detect/Detect"
import NavBar from "../NavBar/NavBar"
import Main from "../Main/Main"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  
  return (
    <React.StrictMode>
      <Router>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/detectFace">
            <Detect />
          </Route>
          <Route path="/todos">
            
          </Route>
          <Route path="/albums">
            
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
