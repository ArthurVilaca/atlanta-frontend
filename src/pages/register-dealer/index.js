import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Service from '../../service';
import './register-dealer.css';

class RegisterDealer extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.state = {
            username: '',
            name: '',
            user_type: 'D',
            registration_code: '',
            password: ''
        }
    }

    doRegisterDealer() {
        this.service.post('/dealer', this.state)
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

    handleChangeUserName = (event) => {
        this.setState({username: event.target.value });
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value });
    }

    handleChangeRegistrationCode = (event) => {
        this.setState({registration_code: event.target.value });
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="login-wrapper">
                    <div className="login-fields">
                        <h3>Cadastro de Revendedor</h3>
                        <TextField
                            id="firs-name"
                            floatingLabelText="Usuario"
                            defaultValue={this.state.username}
                            onChange={this.handleChangeUserName}
                            fullWidth={true}
                            />
                        <TextField
                            id="last-name"
                            floatingLabelText="Nome"
                            defaultValue={this.state.name}
                            onChange={this.handleChangeName}
                            fullWidth={true}
                            />
                        <TextField
                            id="CPF"
                            defaultValue={this.state.registration_code}
                            onChange={this.handleChangeRegistrationCode}
                            floatingLabelText="CPF"
                            fullWidth={true}
                            />
                        <TextField
                            id="pass"
                            defaultValue={this.state.password}
                            onChange={this.handleChangePassword}
                            floatingLabelText="Password"
                            fullWidth={true}
                            type="password"
                            />

                        <div className="pt20">
                            <RaisedButton
                                label="Registrar"
                                primary={true}
                                onClick={() => {
                                    this.doRegisterDealer()
                                }}
                                fullWidth={true}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterDealer)