import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import './header-2.css';

class Header2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: this.props.config
        }
    }

    render() {
        return (
            <div className="content-header-2"
                onClick={() => {
                    this.props.editComponent(this.state)
                }}>
                Hue 2
            </div>
        );
    }
}

export default withRouter(Header2)