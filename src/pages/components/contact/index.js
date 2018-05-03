import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Contrat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: this.props.config
        }
    }

    componentWillReceiveProps(state) {
        this.setState({config: state.config});
    }

    render() {
        return (
            <div className="container contact text-center" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <div className="circle"></div>
                <h1 className="pt-5 pb-3">ENTRE EM CONTATO CONOSCO</h1>
                <h2 className="pb-5">AINDA TEM ALGUMA DUVIDA? PREENCHA O FORMULARIO ABAIXO</h2>
                <div className="row pt-2">
                    <div className="col-md-12 text-left">
                        {/* <h3>Send Us an Email</h3> */}
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label>NOME *</label>
                                    <input type="text" className="form-control" id="inputName" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>EMAIL *</label>
                                    <input type="email" className="form-control" id="inputEmail" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>TELEFONE</label>
                                    <input type="text" className="form-control" id="inputPhone" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label>ASSUNTO *</label>
                                    <input type="text" className="form-control" id="inputName" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group col-md-12">
                                    <label>MENSAGEM *</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea" rows="6"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-submit p-3" type="submit">ENVIAR</button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15217.986781583497!2d-39.7188735!3d-17.5315233!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1524711733329" width="100%" height="405" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default withRouter(Contrat)