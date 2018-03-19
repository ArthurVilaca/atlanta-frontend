import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

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
                if(myResponse.message.type === 'S') {
                    localStorage.setItem('token', myResponse.dataset.token)
                    myResponse.dataset.user_type = 'D'
                    if(myResponse.dataset.user_type === 'D') {
                        this.props.history.push('/clientes' )
                    } else if(myResponse.dataset.user_type === 'C') {
                        this.props.history.push('/paginas' )
                    }
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
            <div>
                <div className="login-wrapper">
                    <div className="login-fields">
                        <h3>Login <a href="">Esqueceu sua senha?</a></h3>
                        <TextField
                            id="name"
                            onChange={this.handleChangeUserName}
                            defaultValue={this.state.username}
                            floatingLabelText="usuario"
                            fullWidth={true}
                        />
                        <TextField
                            id="pass"
                            onChange={this.handleChangePassword}
                            defaultValue={this.state.password}
                            floatingLabelText="senha"
                            fullWidth={true}
                        />
                        <div className="pt20">
                            <Checkbox
                                label="Lembrar"
                            />
                        </div>
                        <div className="pt20">
                            <RaisedButton
                                label="Login"
                                onClick={() => {
                                    this.doLogin()
                                }}
                                primary={true} fullWidth={true}/>
                        </div>

                        <div className="pt20">
                            <RaisedButton
                                label="Quero ser um revendedor"
                                onClick={() => {
                                    this.props.history.push('/registrar/revendedor' )
                                }}
                                primary={true} fullWidth={true}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login)