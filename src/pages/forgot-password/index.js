import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {Redirect} from 'react-router-dom';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import Service from '../../service';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.state = {
            email: ''
        }
    }

    sendResetToken() {
        this.service.post('/forgotPassword', this.state)
            .then((response) => {
                let myResponse = response.data;
                if(myResponse.message.type === 'S') {
                    
                } else {
                    console.log(myResponse);
                    console.log('error');
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="login-wrapper">
                    <div className="login-fields">
                        <h3>Esqueceu sua senha</h3>
                        <h5>Um email sera enviado para que você possar realizar o cadastro de uma nova senha!</h5>
                        <TextField
                            id="email"
                            onChange={this.handleChangeEmail}
                            defaultValue={this.state.email}
                            floatingLabelText="Email"
                            fullWidth={true}
                        />
                        <div className="pt20">
                            <RaisedButton
                                label="Enviar email"
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

export default withRouter(ForgotPassword)