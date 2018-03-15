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
                let myResponse = response.data;
                if(myResponse.message.type == 'S') {
                    localStorage.setItem('token', myResponse.dataset.token)
                    this.props.history.push('/paginas' )
                } else {
                    console.log(myResponse);
                    console.log('error');
                }
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

                    <div>
                        <RaisedButton label="Quero ser um revendedor"
                            primary={true}
                            onClick={() => {
                                this.props.history.push('/registrar/revendedor' )
                            }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Login)