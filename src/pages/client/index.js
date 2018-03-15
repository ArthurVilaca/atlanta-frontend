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
            user_type: 'C',
            registration_code: '',
            password: '',
        }
        console.log(this.props.match.params.id)
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

    doRegisterClient = () => {
        this.service.post('/client', this.state)
            .then((response) => {
                let myResponse = response.data;
                if(myResponse.message.type == 'S') {
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
                            hintText="CPF" />
                    </div>
                    <div>
                        <TextField
                            defaultValue={this.state.password}
                            onChange={this.handleChangePassword}
                            hintText="senha"
                            type="password" />
                    </div>

                    <div>
                        <RaisedButton label="Cadastrar"
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