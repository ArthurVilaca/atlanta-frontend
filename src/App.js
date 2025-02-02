import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SidebarMenuRouters from './routers/routers.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './static/css/App.css';
import './static/css/vendor-styles.css';

import Header from './containers/header.js';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#258df2',
    accent1Color: '#40c741',
  }
});

class App extends Component {

  isSpecificPage(route) {
    let reset = '/#/resetarminhasenha';
    if(route.indexOf(reset) > -1) {
        return true;
    }
    const routes = ['/#/login', '/#/registrar/revendedor', '/#/esqueciminhasenha', '/#/resetarminhasenha']
    return routes.indexOf(route) > -1;
  }

  render() {
    const currentPath = window.location.pathname + window.location.hash;
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            { !this.isSpecificPage(currentPath) && 
                <Header />
            }
            <SidebarMenuRouters />
          </div>
        </MuiThemeProvider>
      </div>

    );
  }
}

export default App;
