import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Diploma from '../Diploma/Diploma';
import Contact from '../Contact/Contact';
import SeniorDesign from '../Projects/SeniorDesign';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {

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
              <Route path="/projects/SeniorDesign" component={SeniorDesign} />
              <Route path="/projects/project2" component={Projects} />
              <Route path="/projects/project3" component={Projects} />
              <Route path="/projects/github" component={GitHub} />
              <Route path="/linkedin" component={LinkedIn} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const Resume = () => <h3> Resume </h3>; 
const Projects = () => <h3> Project </h3>;
const LinkedIn = () => <a href="http://www.linkedin.com/in/jenna-kovacs-0331"> View my LinkedIn Profile</a>;
const GitHub = () => <a href="https://github.com/jenkov331">View my GitHub Account</a>;

export default App;
