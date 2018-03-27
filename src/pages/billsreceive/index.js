import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import moment from 'moment';

import Service from '../../service';

class Billsreceive extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = {
            billsreceives: []
        }
        this.loadBillsreceive()
    }

    loadBillsreceive = () => {
        this.service.get('/billsreceive')
            .then((response) => {
                let myResponse = response.data;
                this.setState({billsreceives: myResponse.dataset.billsreceives})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="content">
                {
                    this.state.billsreceives.map( (billsreceive) => {
                        return (
                            <div></div>
                        )
                    })
                }
            </div>
        );
    }
}

export default withRouter(Billsreceive)