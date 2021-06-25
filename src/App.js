import ProjectForm from './Components/ProjectForm';
import Project from './Components/Project';
import Home from './Components/Home';
import Func from './Components/func';
import ViewCard from './Components/viewCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
          <Route path="/create">
              <ProjectForm />
          </Route>
          <Route path="/view">
              <Project />
          </Route>
          <Route path="/project/:id">
              <ViewCard />
          </Route>
          <Route path="/">
              <Home />
          </Route>
      </Switch>
      </div> 
    </Router>
  );
}

export default App;
