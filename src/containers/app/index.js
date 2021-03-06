import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import sidebar from '../sidebar'
import TopNavBar from '../../components/topNavBar' 

TopNavBar

const App = () => (
  <div>
    <header>
    <TopNavBar></TopNavBar>
    
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/sidebar" component={sidebar} />
    </main>
  </div>
)

export default App;