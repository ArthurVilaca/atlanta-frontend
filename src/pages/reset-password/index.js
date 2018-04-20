import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {Redirect} from 'react-router-dom';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import Service from '../../service';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        console.log('asasdasd')
        this.service = new Service();
        this.state = {
            password: '',
            password2: '',
            token: this.props.match.params.id
        }
    }

    sendResetToken() {
        if(this.state.password !== this.state.password2) {
            return console.log('Senhas divergentes')
        }

        this.service.post('/resetPassword', this.state)
            .then((response) => {
                let myResponse = response.data;
                if(myResponse.message.type === 'S') {
                    this.props.history.push('/login' )
                } else {
                    console.log(myResponse);
                    console.log('error');
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value });
    }

    handleChangePassword2 = (event) => {
        this.setState({password2: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="login-wrapper">
                    <div className="login-fields">
                        <h3>cadastrar nova senha</h3>
                        <TextField
                            id="password-1"
                            type="password"
                            onChange={this.handleChangePassword}
                            defaultValue={this.state.password}
                            floatingLabelText="Senha"
                            fullWidth={true}
                        />
                        <TextField
                            id="password-2"
                            type="password"
                            onChange={this.handleChangePassword2}
                            defaultValue={this.state.password2}
                            floatingLabelText="Confirmar a senha"
                            fullWidth={true}
                        />
                        <div className="pt20">
                            <RaisedButton
                                label="Confirmar"
                                onClick={() => {
                                    this.sendResetToken()
                                }}
                                primary={true} fullWidth={true}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ResetPassword)