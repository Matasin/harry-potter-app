import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Characters from './components/Characters/Characters'
import Students from './components/Students/Students'
import Staff from './components/Staff/Staff'
import House from './components/House/House'

import {
  BrowserRouter as Router ,
  Switch, 
  Route
} from 'react-router-dom';


const App = () => {
  // URL for all charactes
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
                <Route 
                  path='/students' 
                  render={(props) => <Students {...props} URL={URL} />}
                />
                
                <Route 
                  path='/staff' 
                  render={(props) => <Staff {...props} URL={URL} />}
                />
                <Route 
                    path='/house' 
                    render={(props) => <House {...props} URL={URL} />}
                  />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
