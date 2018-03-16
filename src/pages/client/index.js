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
            username: '',
            name: '',
            password: '',
            user_type: 'C',
            registration_code: '',
            company_branch: '',
            sale_plan: 'Basic',
        }
        if(this.props.match.params.id !== 'novo') {
            this.loadclient()
        }
    }

    loadclient = () => {
        this.service.get('/client/' + this.props.match.params.id)
            .then((response) => {
                console.log(response)
                if(response.data.message.type === "S") {
                    this.setState({name: response.data.dataset.user.name})
                    this.setState({username: response.data.dataset.user.username})
                    this.setState({registration_code: response.data.dataset.client.registration_code})
                    this.setState({company_branch: response.data.dataset.client.company_branch})
                    console.log(this.state)
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
                        this.props.history.push('/clientes' )
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
                        this.props.history.push('/clientes' )
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
        return (
            <div className="content-login">
                <div>
                    Cadastro de Cliente
                </div>
                <form>
                    <div>
                        <TextField
                            defaultValue={this.state.username}
                            onChange={this.handleChangeUserName}
                            hintText="usuario" />
                    </div>
                    <div>
                        <TextField
                            defaultValue={this.state.name}
                            onChange={this.handleChangeName}
                            hintText="Nome" />
                    </div>
                    <div>
                        <TextField
                            defaultValue={this.state.registration_code}
                            onChange={this.handleChangeRegistrationCode}
                            hintText="CNPJ" />
                    </div>
                    <div>
                        <TextField
                            defaultValue={this.state.password}
                            onChange={this.handleChangePassword}
                            hintText="senha"
                            type="password" />
                    </div>

                    <div>
                        <TextField
                            defaultValue={this.state.company_branch}
                            onChange={this.handleChangeCompanyBranch}
                            hintText="Nome da Empresa" />
                    </div>

                    <div>
                        <RaisedButton label="Salvar"
                            primary={true}
                            onClick={() => {
                                this.doRegisterClient()
                            }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Client)