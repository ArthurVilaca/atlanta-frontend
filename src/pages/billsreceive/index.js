import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import Service from '../../service';

class Billsreceive extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'));
        var user = JSON.parse(localStorage.getItem('login-info'));
        this.state = {
            billsreceives: [],
            user: user
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
        const tableClass = classNames({
            'table': true,
            'table-striped': true,
            'table-bordered': true,
            'table-hover': true,
            'table-condensed': true
        });
        return (
            <div className="content">
                <div>
                    Contas a Receber
                </div>
                
                <table className={tableClass}>
                    <thead>
                        <tr>
                            <th>Site</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th>Data Pgto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.billsreceives.map( (billsreceive) => {
                                return (
                                    <div></div>
                                )
                            })
                        }

                        <tr key="2">
                            <td>Site ABC</td>
                            <td>R$ 21,00</td>
                            <td>A receber</td>
                            <td>21/07/2018</td>
                        </tr>
                    </tbody>
                </table>

                {
                    this.state.user.user_type === "U" &&
                        <FloatingActionButton
                            secondary={true}
                            className="float-button-pages"
                            onClick={() => {
                                this.generateBills()
                            }} >
                            Gerar Contas
                        </FloatingActionButton>
                }
            </div>
        );
    }
}

export default withRouter(Billsreceive)