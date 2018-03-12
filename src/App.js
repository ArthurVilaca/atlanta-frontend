import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import Page from './pages/page';

class App extends Component {
  render() {
    const currentPath = window.location.pathname;
    return (
      <MuiThemeProvider>
        <div className="App">
          {/* { currentPath ===  "/" && <Redirect to={"/login"}/> } */}
          <Route exact path="/paginas/:id/editar" component={Page}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
