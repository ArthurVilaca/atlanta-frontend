import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class RoutesList extends Component {
  constructor(props) {
    super(props);
    var user = JSON.parse(localStorage.getItem('login-info'))
    this.state = {
      user: user
    }
  }

  componentDidMount() {
    $('.sidebar-nav ul .has-child .child-menu').hide();
    $('.sidebar-nav ul .has-child > a').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next('.child-menu').slideToggle(300);
    });
  }

  render() {
    if(!this.state.user) {
      return null
    }
    return (
      <div className="sidebar-nav">
        <ul>
          <li>
            <Link to="/"><span className="material-icons">dashboard</span>Dashboard</Link>
          </li>

          {
            ( this.state.user.user_type === "D" || this.state.user.user_type === "U" ) && 
            <div>
              <li className="divider"></li>
              <li className="has-child">
                <a href=""><span className="material-icons">shopping_cart</span>Assinantes</a>
                <ul className="child-menu">
                  <li><Link to="/clientes">Listar Clientes</Link></li>
                  <li><Link to="/clientes/novo">Novo Clientes</Link></li>
                </ul>
              </li>
            </div>
          }

          {
            this.state.user.user_type === "D" && 
            <div>
              <li className="divider"></li>
              <li className="has-child">
                <a href=""><span className="material-icons">folder</span>Faturamento</a>
                <ul className="child-menu">
                  <li><Link to="/contasareceber">Contas a receber</Link></li>
                </ul>
              </li>
            </div>
          }

          {
            this.state.user.user_type === "D" && 
            <div>
              <li className="divider"></li>
              <li className="has-child">
                <a href=""><span className="material-icons">folder</span>Suporte</a>
                <ul className="child-menu">
                </ul>
              </li>
            </div>
          }

          {
            this.state.user.user_type === "D" && 
            <div>
              <li className="divider"></li>
              <li className="has-child">
                <a href=""><span className="material-icons">folder</span>Configurações</a>
                <ul className="child-menu">
                </ul>
              </li>
            </div>
          }

          {
            this.state.user.user_type === "U" && 
            <div>
              <li className="divider"></li>
              <li className="has-child">
                <a href=""><span className="material-icons">folder</span>Financeiro</a>
                <ul className="child-menu">
                  <li><Link to="/contasapagar">Contas a pagar</Link></li>
                  <li><Link to="/contasareceber">Contas a receber</Link></li>
                </ul>
              </li>
            </div>
          }

          {
            this.state.user.user_type === "C" && 
            <div>
              <li className="divider"></li>
              <li className="has-child">
                <a href=""><span className="material-icons">folder</span>Paginas</a>
                <ul className="child-menu">
                  <li><Link to="/paginas">Listar</Link></li>
                </ul>
              </li>
            </div>
          }

          {
            this.state.user.user_type === "U" && 
            <div>
              <li className="divider"></li>
              <li className="has-child">
                <a href=""><span className="material-icons">folder</span>Revendedores</a>
                <ul className="child-menu">
                <li><Link to="/revendedores">Listar revendedores</Link></li>
                <li><Link to="/revendedores/novo">Novo revendedore</Link></li>
                </ul>
              </li>
            </div>
          }

          <li className="divider"></li>
          <li className="has-child">
            <a href=""><span className="material-icons">folder</span>Analitics</a>
            <ul className="child-menu">
              {/* <li><Link to="/ui-kit/buttons">Ganhos</Link></li> */}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default RoutesList;
