import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import moment from 'moment';

import Service from '../../service';

class Billspay extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = {
            billspays: []
        }
        this.loadBillspay()
    }

    loadBillspay = () => {
        this.service.get('/billspay')
            .then((response) => {
                let myResponse = response.data;
                // this.setState({billspay: myResponse.dataset.User.client})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="content">
                {
                    this.state.billspays.map( (billspay) => {
                        return (
                            <div></div>
                        )
                    })
                }
            </div>
        );
    }
}

export default withRouter(Billspay)