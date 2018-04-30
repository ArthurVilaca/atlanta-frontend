import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import MaskedInput from 'react-text-mask'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Service from '../../service';
import './index.css';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = {
            open: false,
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };

    pay = () => {
        this.service.post('/payment', this.state)
            .then((response) => {
                if(response.data.message.type === "S") {
                    let nextPage = localStorage.getItem('next-page');
                    if(nextPage) {
                        this.props.history.push(nextPage);
                    } else {
                        this.props.history.push('/clientes');
                    }
                } else {
                    this.setState({message: 'Falha ao processar o pagamento, verifique o dados e tente novamente!'});
                }
            });
    }

    handleChangeCardName = (event) => {
        this.setState({card_number: event.target.value });
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value });
    }

    handleChangeDueDate = (event) => {
        this.setState({due_date: event.target.value });
    }

    handleChangeCvv = (event) => {
        this.setState({cvv: event.target.value });
    }

    render() {
        if(!this.state) {
            return null;
        }
        const actions = [
            <FlatButton
              label="Ok"
              primary={true}
              onClick={this.handleClose}
            />,
        ];

        let payment = this.state;
        return (
            <div>
                <h3>Pagamento</h3>
                <div className="div-input-mask">
                    <MaskedInput
                        className="input-mask"
                        id="name"
                        placeholder="Numero do cartão"
                        defaultValue={payment.card_number}
                        onChange={this.handleChangeCardName}
                        mask={[/[1-9]/, /\d/, /\d/, /\d/, ' ',  /\d/, /\d/, /\d/, /\d/, ' ',  /\d/, /\d/, /\d/, /\d/, ' ',  /\d/, /\d/, /\d/, /\d/]}
                        fullWidth={true}
                        />
                </div>
                <TextField
                    id="number"
                    floatingLabelText="Nome igual ao cartão de credito"
                    defaultValue={payment.name}
                    onChange={this.handleChangeName}
                    fullWidth={true}
                    />
                <div className="div-input-mask">
                    <MaskedInput
                        className="input-mask"
                        id="due-date"
                        mask={[/[1-9]/, /\d/, '/',  /\d/, /\d/, /\d/, /\d/]}
                        placeholder="Vencimento (MM/YYYY)"
                        defaultValue={payment.due_date}
                        onChange={this.handleChangeDueDate}
                        fullWidth={true}
                        />
                </div>
                <TextField
                    id="cvv"
                    floatingLabelText="CVV"
                    defaultValue={payment.cvv}
                    onChange={this.handleChangeCvv}
                    fullWidth={true}
                    />
                <div className="pt20">
                    <RaisedButton
                        label="Salvar"
                        primary={true}
                        onClick={() => {
                            this.pay()
                        }}
                        fullWidth={true}/>
                </div>
                <Dialog
                    title="Atenção"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    >
                    {
                        this.state.message
                    }
                </Dialog>
            </div>
        );
    }
}

export default withRouter(Payment)