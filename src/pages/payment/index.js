import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Service from '../../service';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = null
    }

    componentDidMount() {
        this.setState({  });
    }
    
    render() {
        if(!this.state) {
            return null;
        }
        let payment = this.state;
        return (
            <div>
                <h3>Pagamento</h3>
                <TextField
                    id="name"
                    floatingLabelText="Nome igual ao cartão de credito"
                    defaultValue={payment.name}
                    fullWidth={true}
                    />
                <TextField
                    id="number"
                    floatingLabelText="Numero do cartão"
                    defaultValue={payment.card_number}
                    fullWidth={true}
                    />
                <TextField
                    id="due-date"
                    floatingLabelText="Vencimento (MM/YY)"
                    defaultValue={payment.due_date}
                    fullWidth={true}
                    />
                <TextField
                    id="cvv"
                    floatingLabelText="CVV"
                    defaultValue={payment.cvv}
                    fullWidth={true}
                    />
                <div className="pt20">
                    <RaisedButton
                        label="Salvar"
                        primary={true}
                        onClick={() => {
                            this.doRegisterClient()
                        }}
                        fullWidth={true}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Payment)