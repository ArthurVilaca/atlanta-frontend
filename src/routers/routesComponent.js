import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

// defaults
import Home from '../pages/home.js';

// projects
import Login from '../pages/login/index.js';
import Page from '../pages/page';
import Pages from '../pages/pages';
import RegisterDealer from '../pages/register-dealer';
import Delaer from '../pages/dealer';
import Client from '../pages/client';
import Clients from '../pages/clients';
import Profile from '../pages/profile';
import Dealers from '../pages/dealers';
import Dealer from '../pages/dealer';


class RoutesComponent extends Component {
  render() {
    const currentPath = window.location.pathname;
    let token = localStorage.getItem('token')
    if(!token && currentPath === "/") {
      window.location.assign('/login')
    } else if(currentPath === "/") {
      window.location.assign('/home')
    }
    return (
      <div>
        <Route exact path="/Default" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/login" component={Login}/>
        { currentPath === "/registrar" && <Redirect to={"/login"}/> }
        <Route exact path="/registrar/revendedor" component={RegisterDealer}/>
        <Route exact path="/paginas" component={Pages}/>
        <Route exact path="/paginas/nova" component={Page}/>
        <Route exact path="/paginas/:id/editar" component={Page}/>
        <Route exact path="/revendedor" component={Delaer}/>
        <Route exact path="/clientes" component={Clients}/>
        <Route exact path="/clientes/:id" component={Client}/>
        <Route exact path="/clientes/:id/paginas" component={Pages}/>
        <Route exact path="/clientes/:id/paginas/:page_id/editar" component={Page}/>
        <Route exact path="/meu-perfil" component={Profile}/>
        <Route exact path="/revendedores" component={Dealers}/>
        <Route exact path="/revendedores/:id" component={Dealer}/>
      </div>
    );
  }
}

export default RoutesComponent;
