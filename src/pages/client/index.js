import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Service from '../../service';
import './client.css';

class Client extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = null
    }
    
    componentDidMount() {
        if(this.props.match.params.id && this.props.match.params.id !== 'novo') {
            this.loadclient()
        } else {
            this.setState({ user_type: 'C' });
        }
    }

    loadclient = () => {
        this.service.get('/client/' + this.props.match.params.id)
            .then((response) => {
                if(response.data.message.type === "S") {
                    let client = response.data.dataset.client;
                    client.name = response.data.dataset.user.name;
                    client.username = response.data.dataset.user.username;
                    client.phone = response.data.dataset.user.phone;
                    client.email = response.data.dataset.user.email;
                    client.adress = response.data.dataset.user.adress;
                    client.adress_number = response.data.dataset.user.adress_number;
                    client.adress_complement = response.data.dataset.user.adress_complement;
                    client.adress_district = response.data.dataset.user.adress_district;
                    client.zip_code = response.data.dataset.user.zip_code;
                    client.city = response.data.dataset.user.city;
                    client.state = response.data.dataset.user.state;
                    this.setState(client);
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

    doRegisterClient = () => {
        if(this.props.match.params.id !== 'novo') {
            this.service.put('/client/' + this.props.match.params.id, this.state)
                .then((response) => {
                    let myResponse = response.data;
                    if(myResponse.message.type === 'S') {
                        this.props.history.push('/clientes')
                    } else {
                        console.log(myResponse);
                        console.log('error');
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            this.service.post('/client', this.state)
                .then((response) => {
                    let myResponse = response.data;
                    if(myResponse.message.type === 'S') {
                        this.props.history.push('/clientes')
                    } else {
                        console.log(myResponse);
                        console.log('error');
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    render() {
        if(!this.state) {
            return null;
        }
        let client = this.state;
        return (
            <div>
                <h3>Cadastro de Cliente</h3>
                <TextField
                    id="user-name"
                    floatingLabelText="Usuario"
                    defaultValue={client.username}
                    onChange={this.handleChangeUserName}
                    fullWidth={true}
                    />
                <TextField
                    id="client-name"
                    floatingLabelText="Nome do Cliente"
                    defaultValue={client.name}
                    onChange={this.handleChangeName}
                    fullWidth={true}
                    />
                <TextField
                    id="phone"
                    floatingLabelText="Telefone"
                    defaultValue={client.phone}
                    onChange={this.handleChangePhone}
                    fullWidth={true}
                    />
                <TextField
                    id="email"
                    floatingLabelText="Email"
                    defaultValue={client.email}
                    onChange={this.handleChangeEmail}
                    fullWidth={true}
                    />
                <TextField
                    id="CNPj"
                    defaultValue={client.registration_code}
                    onChange={this.handleChangeRegistrationCode}
                    floatingLabelText="CNPj"
                    fullWidth={true}
                    />
                <TextField
                    id="pass"
                    defaultValue={client.password}
                    onChange={this.handleChangePassword}
                    floatingLabelText="Password"
                    fullWidth={true}
                    type="password"
                    />

                <TextField
                    id="adress"
                    floatingLabelText="Endereço"
                    defaultValue={client.adress}
                    onChange={this.handleChangeAdress}
                    fullWidth={true}
                    />
                <TextField
                    id="adress_number"
                    floatingLabelText="Numero"
                    defaultValue={client.adress_number}
                    onChange={this.handleChangeAdressNumber}
                    fullWidth={true}
                    />
                <TextField
                    id="adress_complement"
                    floatingLabelText="Complemento"
                    defaultValue={client.adress_complement}
                    onChange={this.handleChangeAdressComplement}
                    fullWidth={true}
                    />
                <TextField
                    id="adress_district"
                    floatingLabelText="Bairro"
                    defaultValue={client.adress_district}
                    onChange={this.handleChangeAdressDistrict}
                    fullWidth={true}
                    />
                <TextField
                    id="zip_code"
                    floatingLabelText="CEP"
                    defaultValue={client.zip_code}
                    onChange={this.handleChangeZipCode}
                    fullWidth={true}
                    />
                <TextField
                    id="city"
                    floatingLabelText="Cidade"
                    defaultValue={client.city}
                    onChange={this.handleChangeCity}
                    fullWidth={true}
                    />
                <TextField
                    id="state"
                    floatingLabelText="Estado"
                    defaultValue={client.state}
                    onChange={this.handleChangeState}
                    fullWidth={true}
                    />
                <div className="pt20">
                    <RaisedButton
                        label="Salvar"
                        primary={true}
                        onClick={() => {
                            this.doRegisterClient()
                        }}
                        fullWidth={true}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Client)