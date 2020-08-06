import React from 'react';
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'
import './App.css';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    
      <Router>
     
        <Switch>
        <Route path="/chat/:person">
              <Header backButton="/chat"/>
              <Chats />
              <h3>YOLO</h3>
          </Route>
          <Route path="/chat">
              <Header backButton="/"/>
              <Chats />
          </Route>
          <Route path="/home">
              <Header />
              <TinderCards />
              <SwipeButtons />
          </Route>
          <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
