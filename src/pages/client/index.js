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
        this.state = {
            client: null
        }
    }
    
    componentDidMount() {
        if(this.props.match.params.id && this.props.match.params.id !== 'novo') {
            this.loadclient()
        } else {
            this.setState({ client: {} });
        }
    }

    loadclient = () => {
        this.service.get('/client/' + this.props.match.params.id)
            .then((response) => {
                if(response.data.message.type === "S") {
                    let client = response.data.dataset.client;
                    client.name = response.data.dataset.user.name;
                    client.username = response.data.dataset.user.username;
                    this.setState({client: client});
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

    handleChangeCompanyBranch = (event) => {
        this.setState({company_branch: event.target.value });
    }

    doRegisterClient = () => {
        if(this.props.match.params.id !== 'novo') {
            this.service.put('/client/' + this.props.match.params.id, this.state)
                .then((response) => {
                    let myResponse = response.data;
                    if(myResponse.message.type === 'S') {
                        window.location.assign('/clientes')
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
                        window.location.assign('/clientes')
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
        if(!this.state.client) {
            return null;
        }
        let client = this.state.client;
        return (
            <div>
                <div className="login-wrapper">
                    <div className="login-fields">
                        <h3>Cadastro de Cliente</h3>
                        <TextField
                            id="user-name"
                            floatingLabelText="Usuario"
                            defaultValue={client.username}
                            onChange={this.handleChangeUserName}
                            fullWidth={true}
                            />
                        <TextField
                            id="last-name"
                            floatingLabelText="Nome do Cliente"
                            defaultValue={client.name}
                            onChange={this.handleChangeName}
                            fullWidth={true}
                            />
                        <TextField
                            id="company-name"
                            floatingLabelText="Nome da Empresa"
                            defaultValue={client.company_branch}
                            onChange={this.handleChangeCompanyBranch}
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
                </div>
            </div>
        );
    }
}

export default withRouter(Client)