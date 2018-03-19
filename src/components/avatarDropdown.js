import React, {Component} from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import avatarImage from '../img/user12.jpg';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class AvatarDropdown extends Component {
  state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }

  signOut = () => {
    localStorage.removeItem('token')
    window.location.assign('/login')
    // window.location('/login')
  }

  render() {
    const style= {
      zIndex: '1500'
    }

    return (
      <div>
        <IconMenu
          style={style}
          anchorOrigin={{horizontal:'left', vertical:'bottom'}}
          iconButtonElement={<IconButton>
            <Avatar
              src={avatarImage}
              size={35}
            />
          </IconButton>}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          <MenuItem
            primaryText="View Profile"
            leftIcon={<i className="material-icons">account_circle</i>} />
          <Divider />
          <MenuItem
            primaryText="Sign Out"
            onClick={() => {
              this.signOut()
            }}
            leftIcon={<i className="material-icons">power_settings_new</i>} />
        </IconMenu>
      </div>

    );
  }
}

export default AvatarDropdown