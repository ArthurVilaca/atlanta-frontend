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

import defaultPages from '../components/defaultPages';
var Allcomponents = require('../components/GenericComponent').default;

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
        if(!this.state.newPage.name) {
            return console.log('Nome da pagina deve ser preenchido');
        }
        if(!this.state.newPage.url) {
            return console.log('URL da pagina deve ser preenchido');
        }
        if(this.state.newPage.page) {
            this.state.newPage.page.components.forEach((component) => {
                Allcomponents.forEach((Allcomponent) => {
                    if(Allcomponent.label === component.label) {
                        const obj = {
                            name: Allcomponent.configs.name,
                            label: Allcomponent.label,
                            name_config: Allcomponent.configs.name,
                            text1: Allcomponent.configs.text1,
                            text2: Allcomponent.configs.text2,
                            text3: Allcomponent.configs.text3,
                            text4: Allcomponent.configs.text4,
                            text5: Allcomponent.configs.text5,
                            image1: Allcomponent.configs.image1,
                            image2: Allcomponent.configs.image2,
                            image3: Allcomponent.configs.image3,
                            background_color: Allcomponent.configs.backgroundColor,
                            min_height: Allcomponent.configs.height,
                            can_edit_background_image: Allcomponent.configs.canEditBackgroundColor,
                            can_edit_background_color: Allcomponent.configs.canEditBackgroundImage,
                            background_image: Allcomponent.configs.backgroundImage,
                       }

                        component.configs = obj;
                    }
                })
            })
        }
        this.service.post(this.state.urlApi, this.state.newPage)
            .then((response) => {
                if(response.data.message.type === "S") {
                    if(this.state.user.user_type === "D") {
                        window.location.assign('/clientes/' + this.props.match.params.id + '/paginas/' + response.data.dataset.Page.id + '/editar');
                    } else {
                        window.location.assign('/paginas/' + response.data.dataset.Page.id + '/editar');
                    }
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

    openPage(id) {
        if(this.state.user.user_type === "D") {
            window.location.assign('/clientes/' + this.props.match.params.id + '/paginas/' + id + '/editar');
        } else if(this.state.user.user_type === "C") {
            window.location.assign('/paginas/' + id + '/editar');
        }
    }

    selectPage = (page) => {
        // console.log(page.selected)
        defaultPages.forEach((page) => {
            page.selected = false
        })
        page.selected = true;
        this.state.newPage.page = page;
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
                                    this.openPage(page.id)
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
                            <div className="row">
                                <div className="col-md-12">
                                    Começar com uma pagina base
                                </div>
                            </div>
                            <div className="row">
                                {
                                    defaultPages.map((page) => {
                                        return (
                                            <div key={page.id}
                                                className={ `col-md-4 ${page.selected ? 'page-active' : '' }`}
                                                onClick={ () => {
                                                    this.selectPage(page)
                                                }}>
                                                <img className="preview-img" src={page.url}/> 
                                                {page.name}
                                            </div>
                                        )
                                    })
                                }
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