import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Service from '../../service';

import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.service.setToken(localStorage.getItem('token'));
    var user = JSON.parse(localStorage.getItem('login-info'));
    this.state = {
      user: user
    }
  }

  dealerHome = () => {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 icon-home">
            <div className="home-item">
              <a href="/clientes">
                <i className="home-icon fas fa-users"></i>
                <h3>Assinantes</h3>
              </a>
            </div>
          </div>
          <div className="col-md-4 icon-home">
            <div className="home-item">
              <a href="/contasareceber">
                <i className="home-icon far fa-money-bill-alt"></i>
                <h3>Prospects</h3>
              </a>
            </div>
          </div>
          <div className="col-md-4 icon-home">
            <div className="home-item">
              <a href="/suporte">
                <i className="home-icon fas fa-headphones"></i>
                <h3>Suporte</h3>
              </a>
            </div>
          </div>
          <div className="col-md-4 icon-home">
            <div className="home-item">
              <a href="/revendedor/config">
                <i className="home-icon fas fa-cogs"></i>
                <h3>Configurações</h3>
              </a>
            </div>
          </div>
          <div className="col-md-4 icon-home">
            <div className="home-item">
              <a href="/meu-perfil">
                <i className="home-icon fas fa-user"></i>
                <h3>Meu Perfil</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if(this.state.user.user_type === "D") {
      return this.dealerHome();
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
          </div>

          <div className="col-md-6">
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
