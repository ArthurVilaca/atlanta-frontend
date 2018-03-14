import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Service from '../../service';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.state = {
            username: '',
            password: ''
        }
    }

    doLogin() {
        this.service.post('/login', this.state)
            .then((response) => {
                console.log(response);
                this.props.history.push('/paginas' )
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleChangeUserName = (event) => {
        this.setState({username: event.target.value });
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value });
    }

    render() {
        return (
            <div className="content-login">
                <form>
                    <div>
                        <TextField
                            onChange={this.handleChangeUserName}
                            defaultValue={this.state.username}
                            hintText="usuario" />
                    </div>

                    <div>
                        <TextField
                            onChange={this.handleChangePassword}
                            defaultValue={this.state.password}
                            hintText="senha"
                            type="password" />
                    </div>

                    <div>
                        <RaisedButton label="Login"
                            primary={true}
                            onClick={() => {
                                this.doLogin()
                            }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Login)