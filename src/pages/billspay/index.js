import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';

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
                this.setState({billspay: myResponse.dataset.billspays})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    generateBills = () => {

    }

    render() {
        return (
            <div className="content">
                <div>
                    Contas a Pagar
                </div>
                {
                    this.state.billspays.map( (billspay) => {
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

export default withRouter(Billspay)