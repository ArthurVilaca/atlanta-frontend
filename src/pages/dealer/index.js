import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Service from '../../service';
import './dealer.css';

class Dealer extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = {
            clients: [],
        }
        this.loadClients();
    }

    loadClients = () => {
        this.service.get('/clients')
            .then((response) => {
                console.log(response);
                this.setState({
                    clients: [{
                        id: 1,
                        name: 'padariaDoJoao',
                        status: 'Ativo',
                    }]
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="content-pages">
                <GridList
                    cellHeight={180} >
                    <Subheader>Clientes</Subheader>
                    {
                        this.state.clients.map((client) => (
                            <GridTile
                                className="site"
                                key={client.id}
                                title={client.name}
                                subtitle={<span><b>{client.status}</b></span>}
                                onClick={() => {
                                    this.props.history.push('/paginas/' + client.id + '/editar' )
                                }}>
                            {/* <img src={page.preview} /> */}
                        </GridTile>
                    ))}
                </GridList>

                <FloatingActionButton
                    secondary={true}
                    className="float-button-pages"
                    onClick={() => {
                        this.props.history.push('/clientes/novo' )
                    }} >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

export default withRouter(Dealer)