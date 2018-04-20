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
                    this.props.history.push('/#/login' )
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

    handleChangePhone = (event) => {
        this.setState({phone: event.target.value });
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value });
    }

    handleChangeAdress = (event) => {
        this.setState({adress: event.target.value });
    }

    handleChangeAdressNumber = (event) => {
        this.setState({adress_number: event.target.value });
    }

    handleChangeAdressComplement = (event) => {
        this.setState({adress_complement: event.target.value });
    }

    handleChangeAdressDistrict = (event) => {
        this.setState({adress_district: event.target.value });
    }

    handleChangeZipCode = (event) => {
        this.setState({zip_code: event.target.value });
    }

    handleChangeCity = (event) => {
        this.setState({city: event.target.value });
    }

    handleChangeState = (event) => {
        this.setState({state: event.target.value });
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
                            id="phone"
                            floatingLabelText="Telefone"
                            defaultValue={this.state.phone}
                            onChange={this.handleChangePhone}
                            fullWidth={true}
                            />
                        <TextField
                            id="email"
                            floatingLabelText="Email"
                            defaultValue={this.state.email}
                            onChange={this.handleChangeEmail}
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
                        <TextField
                            id="adress"
                            floatingLabelText="Endereço"
                            defaultValue={this.state.adress}
                            onChange={this.handleChangeAdress}
                            fullWidth={true}
                            />
                        <TextField
                            id="adress_number"
                            floatingLabelText="Numero"
                            defaultValue={this.state.adress_number}
                            onChange={this.handleChangeAdressNumber}
                            fullWidth={true}
                            />
                        <TextField
                            id="adress_complement"
                            floatingLabelText="Complemento"
                            defaultValue={this.state.adress_complement}
                            onChange={this.handleChangeAdressComplement}
                            fullWidth={true}
                            />
                        <TextField
                            id="adress_district"
                            floatingLabelText="Bairro"
                            defaultValue={this.state.adress_district}
                            onChange={this.handleChangeAdressDistrict}
                            fullWidth={true}
                            />
                        <TextField
                            id="zip_code"
                            floatingLabelText="CEP"
                            defaultValue={this.state.zip_code}
                            onChange={this.handleChangeZipCode}
                            fullWidth={true}
                            />
                        <TextField
                            id="city"
                            floatingLabelText="Cidade"
                            defaultValue={this.state.city}
                            onChange={this.handleChangeCity}
                            fullWidth={true}
                            />
                        <TextField
                            id="state"
                            floatingLabelText="Estado"
                            defaultValue={this.state.state}
                            onChange={this.handleChangeState}
                            fullWidth={true}
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