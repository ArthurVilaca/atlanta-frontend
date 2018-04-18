/*
 * filename: routers.js
 * mainly responsivle for all routes component
 * change and sidebar routlist menu item
 * */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import classNames from 'classnames';
import {BrowserRouter as Router, HashRouter} from 'react-router-dom'
import RoutesList from './routesList.js';
import RoutesComponent from './routesComponent.js';
import { Scrollbars } from 'react-custom-scrollbars';
// import Footer from '../components/footer.js';
import FloatingActionButton from 'material-ui/FloatingActionButton';
// import StyleSwitcher from '../style-switcher/index.js';
import RouterOrientation from './routerOrientation';

class SidebarMenuRouters extends Component {
  constructor () {
    super();
    this.state = { menuOpen: true };
    this.menuCollapseWithResize = this.menuCollapseWithResize.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // menu collapse when on mobile function
  menuCollapseWithResize (){
    if (window.innerWidth < 991) {
      this.setState({menuOpen: false});
    }
    if (window.innerWidth > 991) {
      this.setState({menuOpen: true});
    }
  }

  // Sidebar collapse when tablet
  componentDidMount () {
    window.addEventListener('resize', this.menuCollapseWithResize);

    if (window.innerWidth < 991) {
      this.setState({menuOpen: false});
    }

    const currentPath = window.location.pathname + window.location.hash;
    if(currentPath.indexOf('editar') > -1) {
      this.toggleMenu()
    }
  }

  // Sidebar collapse when tablet
  componentWillUnmount() {
    window.removeEventListener('resize', this.menuCollapseWithResize);

    const currentPath = window.location.pathname + window.location.hash;
    if(currentPath.indexOf('editar') > -1) {
      this.toggleMenu()
    }
  }

  // Sidebar toggle
  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  isSpecificPage(route) {
    const routes = ['/#/login', '/#/registrar/revendedor']
    return routes.indexOf(route) > -1;
  }

  render() {
    const currentPath = window.location.pathname + window.location.hash;

    const headerStyle = {
      background: this.props.colorHeader.color
    }

    const containerStyle = {
      background: this.props.colorSidebar.color
    }

    // Page content class change based on menu toggle
    let pageContent = classNames ({});
    if(!this.isSpecificPage(currentPath)) {
      pageContent = classNames ({
        'readmin-page-content' : true,
        'menu-open': this.state.menuOpen
      });
    }

    // Sidebar class based on bg color
    const sidebarClass = classNames ({
      'menu-drawer' : true,
      'has-bg': true,
    });

    // header left part with logo and toggle button
    const HeaderLogoWithMenu = () => (
      <div className="an-header" style={headerStyle}>
        <div className="header-left">
          <a className="brand" href="/">HTTPLAY</a>
          <FloatingActionButton
            mini={true}
            secondary={true}
            onClick={this.toggleMenu}
          >
            <i className="material-icons">menu</i>
          </FloatingActionButton>
        </div>
      </div>
    );

    console.log(currentPath);
    return (
      <HashRouter>
        <div>
          { !this.isSpecificPage(currentPath) && 
            <div className="readmin-sidebar">
              <HeaderLogoWithMenu />
              <Drawer open={this.state.menuOpen}
                className={sidebarClass}
                containerClassName="sidebar-initial-color"
                containerStyle={containerStyle}
              >
                <Scrollbars>
                  <RoutesList />
                </Scrollbars>
              </Drawer>
            </div>
          }
          <div className={pageContent}>
            {/* <StyleSwitcher/> */}
            { !this.isSpecificPage(currentPath) && 
              <RouterOrientation />
            }
            <RoutesComponent />
            {/* <Footer /> */}
          </div>
        </div>
      </HashRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    colorHeader: state.headerActiveStyle,
    colorSidebar: state.sidebarActiveStyle
  }
}

export default connect(mapStateToProps)(SidebarMenuRouters);
