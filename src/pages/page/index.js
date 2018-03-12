import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Edit from '../edit';

import Header1 from '../components/header-1';
import Header2 from '../components/header-2';

import './page.css';

let components = [{
    id: 1, name: Header1, configs: {}
}, {
    id: 2, name: Header2, configs: {}
}];

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: {},
            edit: {}
        }
    }

    editComponent(component) {
        console.log(component);
        // this.setState({edit: component});
        console.log(this)
    }

    render() {
        return (
            <div >
                <div className="content-page-title">Edição de Pagina</div>
                <div className="content-page">
                    {
                        components.map( (component) => {
                            const TagName = component.name;
                            return (
                                <TagName key={component.id} config={component} editComponent={this.editComponent} />
                            );
                        })
                    }
                </div>
                <Edit config={this.state.edit} />
            </div>
        );
    }
}

export default withRouter(Page)