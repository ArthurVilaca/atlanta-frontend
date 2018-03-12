import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Edit from '../edit';

import Header1 from '../components/header-1';
import Header2 from '../components/header-2';

import './page.css';
// import components from '../components/map.json'

import components from '../components/GenericComponent';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: null,
            editingComponent: null,
            components: components
        }
    }

    editComponent = (component, editingComponent) => {
        this.setState({config: component});
    }

    changeProperty = (name, value) => {
        let Tag = components.filter((component) => {
            return this.state.config.name == component.label
        })[0]
        console.log('tag', Tag);
        Tag.configs[name].set = value;
        this.setState({components: components})
        console.log(this.state.components)
    }

    render() {
        if(!this.state.components) {
            return null;
        }
        return (
            <div >
                <div className="content-page-title">Edição de Pagina</div>
                <div className="content-page">
                    {
                        this.state.components.map( (component) => {
                            const TagName = component.name;
                            return (
                                <TagName key={component.id} components={this.state.components} config={component.configs} editComponent={this.editComponent} />
                            );
                        })
                    }
                </div>
                {
                    this.state.config && 
                    <Edit config={this.state.config} changeProperty={this.changeProperty} />
                }
            </div>
        );
    }
}

export default withRouter(Page)