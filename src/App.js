import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Characters from './components/Characters/Characters'

import {
  BrowserRouter as Router ,
  Switch, Route
} from 'react-router-dom';


const App = () => {
  const URL = `http://hp-api.herokuapp.com/api/characters`;
  return (
    <Router>
        <div className='App'>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Homepage}/>
                <Route 
                  path='/characters' 
                  render={(props) => <Characters {...props} URL={URL} />}
                />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
