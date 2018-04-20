import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import moment from 'moment';

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
            })
            .catch((error) => {
                console.log(error);
            })
    }

    openClientPages = (id) => {
        this.props.history.push('/clientes/' + id )
    }

    render() {
        const tableClass = classNames({
            'table': true,
            'table-striped': true,
            'table-bordered': true,
            'table-hover': true,
            'table-condensed': true
        });
        return (
            <div className="content">
                <div className="search-clients">
                    <TextField
                        id="name"
                        onChange={this.handleChangeUserName}
                        floatingLabelText="Pesquisar"
                        fullWidth={true} />
                </div>
                <table className={tableClass}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Status</th>
                            <th>Ativação</th>
                            <th>Editar</th>
                            <th>Paginas</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.clients.map( (client) => {
                                return (
                                    <tr key={client.id}>
                                        <td>{ client.company_branch }</td>
                                        <td>{ client.company_branch }</td>
                                        <td>{ client.company_branch }</td>
                                        <td className="clickable"
                                            onClick={() => {
                                                this.props.history.push('/clientes/' + client.id )
                                            }} >
                                            <i className="fas fa-edit"></i>
                                        </td>
                                        <td className="clickable"
                                            onClick={() => {
                                                this.props.history.push('/clientes/' + client.id + '/paginas')
                                            }} >
                                            <i className="far fa-file"></i>
                                        </td>
                                        <td className="clickable">
                                            <i className="fas fa-trash"></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

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