import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Pages/Home/Home';
import Diploma from '../Pages/Diploma/Diploma';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />  
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={Home} />
              <Route path="/resume" component={Resume} />
              <Route path="/diploma" component={Diploma} />
              <Route path="/projects/project1" component={Project} />
              <Route path="/projects/project2" component={Project} />
              <Route path="/projects/project3" component={Project} />
              <Route path="/projects/github" component={Project} />
              <Route path="/linkedin" component={Resume} />
              <Route path="/contact" component={Project} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const Resume = () => <h3> Resume </h3>; 
const Project = () => <h3> Project </h3>;

export default App;
