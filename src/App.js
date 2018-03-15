import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import Page from './pages/page';
import Login from './pages/login';
import Pages from './pages/pages';
import RegisterDealer from './pages/register-dealer';
import Delaer from './pages/dealer';
import Client from './pages/client';

class App extends Component {
  render() {
    const currentPath = window.location.pathname;
    return (
      <MuiThemeProvider>
        <div className="App">
          { currentPath === "/" && <Redirect to={"/login"}/> }
          <Route exact path="/login" component={Login}/>
          { currentPath === "/registrar" && <Redirect to={"/login"}/> }
          <Route exact path="/registrar/revendedor" component={RegisterDealer}/>
          <Route exact path="/paginas" component={Pages}/>
          <Route exact path="/paginas/nova" component={Page}/>
          <Route exact path="/paginas/:id/editar" component={Page}/>
          <Route exact path="/revendedor" component={Delaer}/>
          <Route exact path="/clientes/:id" component={Client}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
