import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Service from '../../service';
import './clients.css';

class Clients extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = {
            clients: []
        }
        this.loadClients()
    }

    loadClients = () => {
        this.service.get('/client')
            .then((response) => {
                let myResponse = response.data;
                this.setState({clients: myResponse.dataset.User.client})
                console.log(this.state.clients)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    openClientPages = (id) => {
        this.props.history.push('/clientes/' + id )
    }

    render() {
        return (
            <div className="content">
                {
                    this.state.clients.map( (client) => {
                        return (
                            <Card key={client.id}>
                                <CardTitle title={ client.company_branch } />
                                <CardText>
                                    CNPJ: { client.registration_code }
                                    <br />
                                    {/* Data Registro: { moment(client.created_at).format('L') } */}
                                </CardText>
                                <CardActions>
                                    <FlatButton
                                        label="Editar"
                                        onClick={() => {
                                            this.props.history.push('/clientes/' + client.id )
                                        }} />
                                    <FlatButton
                                        label="Paginas"
                                        onClick={() => {
                                            // this.delete(client.id);
                                        }}
                                        />
                                </CardActions>
                            </Card>
                        )
                    })
                }

                <FloatingActionButton
                    secondary={true}
                    className="float-button-pages"
                    onClick={() => {
                        this.props.history.push('/clientes/novo')
                    }} >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

export default withRouter(Clients)