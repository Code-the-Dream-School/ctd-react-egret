import TodoList from "./TodoList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoContainer from "./TodoContainer";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <TodoContainer tableName="Personal" />
          </Route>
          <Route path="/work">
            <TodoContainer tableName="Work" />
          </Route>
          <Route path="/intentions">
            <TodoContainer tableName="Intentions" />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
