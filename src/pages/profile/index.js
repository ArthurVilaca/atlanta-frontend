import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Service from '../../service';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = {
            username: '',
            name: '',
            password: '',
        }
    }

    handleChangeUserName = (event) => {
        this.setState({username: event.target.value });
    }

    saveProfile = () => {
        this.service.post('/profile', this.state)
            .then((response) => {
                let myResponse = response.data;
                if(myResponse.message.type === 'S') {
                    window.location.assign('/')
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
            <div>
                <div className="login-wrapper">
                    <div className="login-fields">
                        <h3>Meu Perfil</h3>
                        <TextField
                            id="user-name"
                            floatingLabelText="Usuario"
                            defaultValue={this.state.username}
                            onChange={this.handleChangeUserName}
                            fullWidth={true}
                            />
                        <TextField
                            id="last-name"
                            floatingLabelText="Nome do Cliente"
                            defaultValue={this.state.name}
                            onChange={this.handleChangeName}
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
                                label="Salvar"
                                primary={true}
                                onClick={() => {
                                    this.saveProfile()
                                }}
                                fullWidth={true}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Profile)