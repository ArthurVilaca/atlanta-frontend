import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Modal from 'react-modal';

import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import Service from '../../service';
import './pages.css';

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

class Pages extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        var user = JSON.parse(localStorage.getItem('login-info'))
        var urlApi = ''

        if(user.user_type === "D") {
            urlApi = '/page/client/' + this.props.match.params.id
        } else if(user.user_type === "C") {
            urlApi = '/page'
        }

        this.state = {
            Page: [],
            modalIsOpen: false,
            newPage: {
                file:"teste.html",
	            status: "published",
            },
            urlApi: urlApi,
            user: user
        }
    }
    
    componentDidMount() {
        this.loadPages();
    }

    loadPages = () => {
        this.service.get(this.state.urlApi)
            .then((response) => {
                if(response.data.message.type === "S") {
                    let pages = response.data.dataset.Page;
                    this.setState({ Page: pages })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    createPage = () => {
        this.setState({modalIsOpen: true})
    }

    newPage = () => {
        this.service.post(this.state.urlApi, this.state.newPage)
            .then((response) => {
                if(response.data.message.type === "S") {
                    this.props.history.push('/paginas/' + response.data.dataset.Page.id )
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    closeModal = () => {
        this.setState({modalIsOpen: false})
    }

    handleNewPageName = (event) => {
        this.state.newPage.name = event.target.value;
        this.setState({newPage: this.state.newPage });
    }

    handleNewPageUrl = (event) => {
        this.state.newPage.url = event.target.value;
        this.setState({newPage: this.state.newPage });
    }

    render() {
        return (
            <div className="content-pages">
                <GridList
                    cellHeight={180} >
                    <Subheader>Sites</Subheader>
                    {
                        this.state.Page.map((page) => (
                            <GridTile
                                className="site"
                                key={page.id}
                                title={page.name}
                                subtitle={<span><b>{page.status}</b></span>}
                                onClick={() => {
                                    this.props.history.push('/paginas/' + page.id + '/editar' )
                                }}>
                            <img src={page.preview} />
                        </GridTile>
                    ))}
                </GridList>

                <FloatingActionButton
                    secondary={true}
                    className="float-button-pages"
                    onClick={() => {
                        // this.props.history.push('/paginas/nova' )
                        this.createPage()
                    }} >
                    <ContentAdd />
                </FloatingActionButton>

                <Modal
                    style={customStyles}
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Modal"
                    >

                    <div className="content-modal-pages">
                        <div className="modal-header-pages">
                            <div className="inline">Criação de pagina</div>
                            <i onClick={this.closeModal}
                                className="material-icons right">close</i>
                        </div>
                        <div className="modal-body-pages">
                        <div className="row">
                                <div className="col-md-12">
                                    <TextField
                                        defaultValue={this.state.newPage.name}
                                        onChange={this.handleNewPageName}
                                        hintText="Nome da pagina" />
                                </div>
                                <div className="col-md-12">
                                    <TextField
                                        defaultValue={this.state.newPage.url}
                                        onChange={this.handleNewPageUrl}
                                        hintText="Prefixo da URL" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-primary"
                                onClick={ () => {
                                    this.newPage()
                                }}
                                >Crirar</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(Pages)