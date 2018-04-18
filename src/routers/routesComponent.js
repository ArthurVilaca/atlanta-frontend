import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from 'react-router-dom';

// defaults
import Home from '../pages/home';

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
import Suport from '../pages/support';
import DealerConfig from '../pages/dealer_config';

import Billspay from '../pages/billspay';
import Billsreceive from '../pages/billsreceive';

class RoutesComponent extends Component {
  render() {
    const currentPath = window.location.pathname + window.location.hash;
    let token = localStorage.getItem('token')
    if(!token && (currentPath === "/" || currentPath === "/#" || currentPath === "#/")) {
      window.location.assign('/#/login')
    } else if(currentPath === "/" || currentPath === "/#" || currentPath === "#/") {
      window.location.assign('/#/home')
    }
    return (
      <div>
        <HashRouter basename="/"/>

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
        <Route exact path="/contasapagar" component={Billspay}/>
        <Route exact path="/contasareceber" component={Billsreceive}/>
        <Route exact path="/suporte" component={Suport}/>
        <Route exact path="/revendedor/config" component={DealerConfig}/>
      </div>
    );
  }
}

export default RoutesComponent;
