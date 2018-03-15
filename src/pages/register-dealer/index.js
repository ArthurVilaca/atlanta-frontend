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
            email: '',
            registration_code: '',
            phone: '',
            password: ''
        }
    }

    doRegisterDealer() {
        this.service.post('/register/dealer', this.state)
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
                    Cadastro de Revendedor
                </div>
                <form>
                    <div>
                        <TextField
                            defaultValue={this.state.username}
                            hintText="usuario" />
                    </div>
                    <div>
                        <TextField
                            defaultValue={this.state.name}
                            hintText="Nome" />
                    </div>
                    <div>
                        <TextField
                            defaultValue={this.state.email}
                            hintText="Email" />
                    </div>
                    <div>
                        <TextField
                            defaultValue={this.state.registration_code}
                            hintText="CPF" />
                    </div>
                    <div>
                        <TextField
                            defaultValue={this.state.phone}
                            hintText="Telefone" />
                    </div>
                    <div>
                        <TextField
                            defaultValue={this.state.password}
                            hintText="senha"
                            type="password" />
                    </div>

                    <div>
                        <RaisedButton label="Cadastrar"
                            primary={true}
                            onClick={() => {
                                this.doRegisterDealer()
                            }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(RegisterDealer)