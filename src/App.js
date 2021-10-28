import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListContainer from "./ListContainer";
import Navigation from "./Navigation";

function App() {
  
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/List-1" >
          <ListContainer listName='List 1' />
        </Route>

        <Route path="/List-2">
          <ListContainer listName='List 2' />
        </Route>
        
        <Route path="/List-3">
          <ListContainer listName='List 3' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
