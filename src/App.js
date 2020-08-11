import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={Login}/>

        <Route path='*' component={Page404}/>
     </Switch>
    </div>
  );
}

export default App;
