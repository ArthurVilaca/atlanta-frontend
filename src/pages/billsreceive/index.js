import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';

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

    generateBills = () => {
        this.service.post('/billsreceive')
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
                <div>
                    Contas a Receber
                </div>
                {
                    this.state.billsreceives.map( (billsreceive) => {
                        return (
                            <div></div>
                        )
                    })
                }
                <FloatingActionButton
                    secondary={true}
                    className="float-button-pages"
                    onClick={() => {
                        this.generateBills()
                    }} >
                    Gerar Contas
                </FloatingActionButton>
            </div>
        );
    }
}

export default withRouter(Billsreceive)