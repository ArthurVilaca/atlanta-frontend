import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Modal from 'react-modal';

import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Edit from '../edit';
import './page.css';
import Service from '../../service';

var components = require('../components/GenericComponent');
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
        this.state = {
            config: null,
            editingComponent: null,
            components: components.default,
            isHovering: false,
            modalIsOpen: false,
        }
        this.loadPage();
    }

    loadPage = () => {
        this.service.get('/paginas/' + this.props.match.params.id)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    editComponent = (component, editingComponent) => {
        this.setState({config: component});
    }

    changeProperty = (value) => {
        this.setState({
            components: this.state.components.map(component => this.state.config.name === component.label
              ? { ...component, configs: value }
              : component
            )
        });
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

    saveData = () => {
        this.setState({config: null});
    }

    pushComponent = (component) => {
        component.id = this.state.components.length + 1;
        this.state.components.push(component);
        // this.setState({
        //     components: ...components.push(component);
        // })
    }

    render() {
        if(!this.state.components) {
            return null;
        }
        return (
            <div >
                <div className="content-page-title">
                    <div className="publish-site-header">Edição de Pagina</div>
                    <div className="publish-site-page">
                        <RaisedButton label="Publicar Site"
                            primary={true}
                            onClick={() => {
                                this.publishSite()
                            }} />
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
                                                className=""
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
                </div>
                {
                    this.state.config && 
                    <Edit config={this.state.config} changeProperty={this.changeProperty} saveData={this.saveData} />
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
                            <div>Seleção de Componente</div>
                            <button onClick={this.closeModal}>Fechar</button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                {
                                    Allcomponents.default.map( (component, id) => {
                                        const TagName = component.name;
                                        return (
                                            <div
                                                key={id}
                                                className="col-md-4 preview-component"
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
            </div>
        );
    }
}

export default withRouter(Page)