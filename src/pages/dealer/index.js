import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Service from '../../service';

class Dealer extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = null
    }
    
    componentDidMount() {
        if(this.props.match.params.id && this.props.match.params.id !== 'novo') {
            this.loadDealer()
        } else {
            this.setState({ user_type: 'D' });
        }
    }

    loadDealer = () => {
        this.service.get('/dealer/' + this.props.match.params.id)
            .then((response) => {
                if(response.data.message.type === "S") {
                    let dealer = response.data.dataset.dealer;
                    dealer.name = response.data.dataset.user.name;
                    dealer.username = response.data.dataset.user.username;
                    this.setState(dealer);
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

    doRegisterDealer = () => {
        if(this.props.match.params.id !== 'novo') {
            this.service.put('/dealer/' + this.props.match.params.id, this.state)
                .then((response) => {
                    let myResponse = response.data;
                    if(myResponse.message.type === 'S') {
                        window.location.assign('/revendedores')
                    } else {
                        console.log(myResponse);
                        console.log('error');
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            this.service.post('/dealer', this.state)
                .then((response) => {
                    let myResponse = response.data;
                    if(myResponse.message.type === 'S') {
                        window.location.assign('/revendedores')
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
        let dealer = this.state;
        return (
            <div>
                <div className="login-wrapper">
                    <div className="login-fields">
                        <h3>Cadastro de Revendedor</h3>
                        <TextField
                            id="user-name"
                            floatingLabelText="Usuario"
                            defaultValue={dealer.username}
                            onChange={this.handleChangeUserName}
                            fullWidth={true}
                            />
                        <TextField
                            id="last-name"
                            floatingLabelText="Nome do Revendedor"
                            defaultValue={dealer.name}
                            onChange={this.handleChangeName}
                            fullWidth={true}
                            />
                        <TextField
                            id="CPF"
                            defaultValue={dealer.registration_code}
                            onChange={this.handleChangeRegistrationCode}
                            floatingLabelText="CPF"
                            fullWidth={true}
                            />
                        <TextField
                            id="pass"
                            defaultValue={dealer.password}
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

export default withRouter(Dealer)