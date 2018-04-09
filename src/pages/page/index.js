import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Modal from 'react-modal';
import { debounce } from 'lodash'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

import Edit from '../edit';
import './page.css';
import Service from '../../service';

import componentsArray from '../components'
var Allcomponents = require('../components/GenericComponent');

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

class Page extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        var user = JSON.parse(localStorage.getItem('login-info'))
        var urlApi = ''

        if(user.user_type === "D") {
            urlApi = '/page/' + this.props.match.params.page_id + '/components'
        } else if(user.user_type === "C") {
            urlApi = '/page/' + this.props.match.params.id + '/components'
        }

        this.state = {
            pageConfig: {
                name: 'Pagina de teste',
                urlPrefix: 'pageTest'
            },
            config: null,
            editingComponent: null,
            components: [],
            isHovering: false,
            modalIsOpen: false,
            modalConfigPage: false,
            urlApi: urlApi,
            user: user
        }
        this.saveData = debounce(this.saveData,200);
    }
    
    componentDidMount() {
        this.loadPage();
    }

    loadPage = () => {
        this.service.get(this.state.urlApi)
            .then((response) => {
                if(response.data.message.type === "S") {
                    let components = response.data.dataset.Component;
                    for(let i in components) {
                        for(let c in componentsArray) {
                            if(componentsArray[c].name === components[i].name) {
                                components[i].name = componentsArray[c].value
                                components[i].configs.height = components[i].configs.min_height
                                components[i].configs.backgroundColor = components[i].configs.background_color
                                components[i].configs.canEditBackgroundColor = components[i].configs.can_edit_background_colort
                                components[i].configs.canEditBackgroundImage = components[i].configs.can_edit_background_image
                                components[i].configs.backgroundImage = components[i].configs.background_image
                            }
                        }
                    }
                    this.setState({components: components})
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    editComponent = (component, editingComponent) => {
        this.setState({config: component});
    }

    changeProperty = (value) => {
        this.saveData(value)
    }

    publishSite = () => {
        console.log('to publish')
    }

    handleMouseHover = () => {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState = (state) => {
        return {
            isHovering: !state.isHovering,
        }
    }

    addComponent = (id) => {
        this.openModal()
    }

    // modal functions
    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    
    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    stopEditing = () => {
        this.setState({config: null});
    }

    saveData = (component) => {
        const obj = {
            id: component.id,
            name: component.name,
            name_config: component.name,
            text1: component.text1,
            text2: component.text2,
            text3: component.text3,
            text4: component.text4,
            text5: component.text5,
            image1: component.image1,
            image2: component.image2,
            image3: component.image3,
            background_color: component.backgroundColor,
            min_height: component.height,
            can_edit_background_image: component.canEditBackgroundColor,
            can_edit_background_color: component.canEditBackgroundImage,
            background_image: component.backgroundImage,
       }

        this.service.put(this.state.urlApi + '/' + obj.id, obj)
            .then((response) => {
                if(response.data.message.type === "S") {
                    this.closeModal()
                    this.loadPage()
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    pushComponent = (component) => {
        const obj = {
            name: component.configs.name,
            label: component.label,
            name_config: component.configs.name,
            text1: component.configs.text1,
            text2: component.configs.text2,
            text3: component.configs.text3,
            text4: component.configs.text4,
            text5: component.configs.text5,
            image1: component.configs.image1,
            image2: component.configs.image2,
            image3: component.configs.image3,
            background_color: component.configs.backgroundColor,
            min_height: component.configs.height,
            can_edit_background_image: component.configs.canEditBackgroundColor,
            can_edit_background_color: component.configs.canEditBackgroundImage,
            background_image: component.configs.backgroundImage,
       }
        
        this.service.post(this.state.urlApi, obj)
            .then((response) => {
                if(response.data.message.type === "S") {
                    this.closeModal()
                    this.loadPage()
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    openConfigsPage = () => {
        this.setState({modalConfigPage: true});
    }

    closeConfigsPage = () => {
        this.setState({modalConfigPage: false});
    }

    render() {
        if(!this.state.components) {
            return null;
        }
        const classes = this.state.isHovering ? '' : 'hide'
        return (
            <div >
                <div className="content-page-title">
                    <div className="publish-site-header">Edição de Pagina</div>
                    <div className="publish-site-page">
                        <button className="btn btn-primary my-1" label="Configurações"
                            primary={true}
                            onClick={() => {
                                this.openConfigsPage()
                            }}>Configurações</button>
                        <button className="btn btn-primary my-1" label="Publicar Site"
                            primary={true}
                            onClick={() => {
                                this.publishSite()
                            }}>Publicar Site</button>
                    </div>
                </div>
                <div
                    className="content-page"
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    >
                    {
                        this.state.components.map( (component, id) => {
                            const TagName = component.name;
                            return (
                                <div key={id}
                                    >
                                    <TagName key={id} components={this.state.components} config={component.configs} editComponent={this.editComponent} />
                                    {
                                        this.state.isHovering &&
                                        <div>
                                            <FloatingActionButton
                                                secondary={true}
                                                className={classes}
                                                onClick={() => {
                                                    this.addComponent(component.id)
                                                }} >
                                                <ContentAdd />
                                            </FloatingActionButton>
                                        </div>
                                    }
                                </div>
                            );
                        })
                    }

                    {
                        this.state.components.length === 0 && 
                            <FloatingActionButton
                                onClick={() => {
                                    this.addComponent(0)
                                }} >
                                <ContentAdd />
                            </FloatingActionButton>
                    }
                </div>
                {
                    this.state.config && 
                    <Edit config={this.state.config} changeProperty={this.changeProperty} saveData={this.stopEditing} />
                }

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
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
                            <div className="row">
                                {
                                    Allcomponents.default.map( (component, id) => {
                                        const TagName = component.name;
                                        return (
                                            <div
                                                key={id}
                                                className="col-md-3 preview-component"
                                                onClick={() => {
                                                    this.pushComponent(component)
                                                }}
                                                >
                                                <TagName
                                                    key={id}
                                                    components={this.state.components}
                                                    config={component.configs}
                                                    editComponent={this.editComponent}
                                                    />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.modalConfigPage}
                    // onAfterOpen={this.afterOpenModal}
                    // onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >

                    <div className="content-modal">
                        <div className="modal-header">
                            <div className="inline">Configurações da Pagina</div>
                            <i onClick={this.closeConfigsPage}
                                className="material-icons right">close</i>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <TextField
                                        defaultValue={this.state.pageConfig.name}
                                        hintText="Nome da pagina" />
                                </div>
                                <div className="col-md-12">
                                    <TextField
                                        defaultValue={this.state.pageConfig.urlPrefix}
                                        hintText="Prefixo da URL" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-primary"
                                onClick={this.closeConfigsPage}
                                >Salvar</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(Page)