import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormBuilder from './components/FormBuilder';
import SurveyList from './components/SurveyList';
import Analytics from './components/Analytics';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SurveyList} />
          <Route path="/create" component={FormBuilder} />
          <Route path="/analytics" component={Analytics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;