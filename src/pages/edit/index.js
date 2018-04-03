import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SketchPicker } from 'react-color';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Modal from 'react-modal';
import Service from '../../service';

import './edit.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement(document.getElementById('root'));

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = null
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
    }

    componentDidMount() {
        this.setState({ });
    }
    
    componentWillReceiveProps(state) {
        console.log(state.config);
        this.setState(state.config);
    }

    handleBackgroundColor = (color) => {
        this.setState({ backgroundColor: color.hex }, () => {
            this.props.changeProperty(this.state);
        });
    }

    saveData = () => {
        this.props.saveData();
        this.setState(null);
    }

    handleText1Change = (event) => {
        this.setState({ text1: event.target.value }, () => {
            this.props.changeProperty(this.state);
        });
    }

    openGalery = (img) => {
        let url = '/midia';
        var user = JSON.parse(localStorage.getItem('login-info'))
        if(user.user_type === "D") {
            url = '/client/' + this.props.match.params.id + '/midia';
        }
        this.service.get(url)
            .then((response) => {
                if(response.data.message.type === "S") {
                    let midia = response.data.dataset.midias;
                    this.setState({galery: midia})
                }
            })
            .catch((error) => {
                console.log(error);
            })

        this.setState({imgInFoco: img});
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    handleChangeInput = (event) => {
        var files = event.target.files;
        var photo;
        var fd = new FormData();
        if(files[0].size <= 2048000) {
            fd.append('midia', files[0]);
            this.service.post('/midia', fd)
            .then((response) => {
                if(response.data.message.type === "S") {
                    this.openGalery()
                }
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

    render() {
        if(!this.state) {
            return null;
        }
        return (
            <div className="content-edit">
                Edição do Componente
                {
                    this.state.backgroundColor &&  <div className="prop-edit">
                    Cor de fundo: <SketchPicker
                        color={ this.state.backgroundColor }
                        onChangeComplete={ this.handleBackgroundColor } />
                    </div>
                }

                {
                    this.state.text1 &&  <div className="prop-edit">
                        <TextField
                            onChange={this.handleText1Change}
                            className="text-field-edit"
                            defaultValue={this.state.text1}
                            floatingLabelText="Texto 1" />
                    </div>
                }

                <div className="item-edit">
                    <RaisedButton label="Alterar imagem de fundo"
                        className="sketch-picker"
                        primary={true}
                        onClick={() => {
                            this.openGalery('backgroundImage')
                        }} />
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >

                    <div className="content-modal">
                        <div className="modal-header">
                            <div className="inline">Seleção de Componente</div>
                            <i onClick={this.closeModal}
                                className="material-icons right">close</i>
                        </div>
                        <div className="modal-body">
                            <div className="">
                                {
                                    this.state.galery &&
                                    this.state.galery.map( (img, id) => {
                                        return (
                                            <div
                                                key={id}
                                                className=""
                                                onClick={() => {
                                                    // this.pushComponent(component)
                                                }}
                                                >
                                                <img className="preview-img" src={img.url}/> 
                                            </div>
                                        );
                                    })
                                }
                                <input onChange={this.handleChangeInput} type="file" accept="image/jpg,image/png" multiple="false" />
                            </div>
                        </div>
                    </div>
                </Modal>

                <div className="item-edit">
                    <RaisedButton label="Salvar"
                        className="sketch-picker"
                        primary={true}
                        onClick={() => {
                            this.saveData()
                        }} />
                </div>

            </div>
        );
    }
}

export default withRouter(Edit)