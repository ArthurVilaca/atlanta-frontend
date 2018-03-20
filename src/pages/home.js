import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Service from '../service';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = null
    this.service = new Service();
    this.service.setToken(localStorage.getItem('token'))
  }

  render() {
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
