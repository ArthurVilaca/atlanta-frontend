import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class RouterOrientation extends Component {
  constructor(props) {
    super(props);
    this.state = null
  }

  render() {
    let pages = window.location.pathname.split('/');
    let current_url = '';
    return (
      <div style={{fontSize: '12px'}}>
          {
            pages.map((page, id) => {
              if(page === '') {
                  return 'Navegar: ';
              }
              current_url += '/' + page;
              return  <a key={id} href={current_url}>/{page}</a>
            })
          }
      </div>
    );
  }
}

export default withRouter(RouterOrientation);
