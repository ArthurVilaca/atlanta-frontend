import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import moment from 'moment';

import Service from '../../service';

class Dealers extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = {
            dealers: []
        }
        this.loadDealers()
    }

    loadDealers = () => {
        this.service.get('/dealer')
            .then((response) => {
                let myResponse = response.data;
                this.setState({dealers: myResponse.dataset.User.dealers})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="content">
                {
                    this.state.dealers.map( (dealer) => {
                        return (
                            <Card key={dealer.id}>
                                <CardTitle title={ dealer.user.name } subtitle={ dealer.user.status } />
                                <CardText>
                                    CNPJ: { dealer.registration_code }
                                    <br />
                                    Data Registro: { moment(dealer.created_at).format('L') }
                                </CardText>
                                <CardActions>
                                    <FlatButton
                                        label="Editar"
                                        onClick={() => {
                                            this.props.history.push('/revendedores/' + dealer.id )
                                        }} />
                                </CardActions>
                            </Card>
                        )
                    })
                }

                <FloatingActionButton
                    secondary={true}
                    className="float-button-pages"
                    onClick={() => {
                        this.props.history.push('/revendedores/novo')
                    }} >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

export default withRouter(Dealers)