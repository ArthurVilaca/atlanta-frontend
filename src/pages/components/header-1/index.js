import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import './header-1.css';

class Header1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: this.props.config
        }
    }

    render() {
        return (
            <div className="content-header-1"
                onClick={() => {
                    this.props.editComponent(this.state)
                }}>
                Hue 1
            </div>
        );
    }
}

export default withRouter(Header1)