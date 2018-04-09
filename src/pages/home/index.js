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
          </div>
          <div className="col-md-4 icon-home">
          </div>
          <div className="col-md-4 icon-home">
          </div>
          <div className="col-md-4 icon-home">
          </div>
          <div className="col-md-4 icon-home">
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
