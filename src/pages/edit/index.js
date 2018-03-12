import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import './edit.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: this.props.config
        }
    }

    render() {
        return (
            <div className="content-edit">
                Edição do Componente
            </div>
        );
    }
}

export default withRouter(Edit)