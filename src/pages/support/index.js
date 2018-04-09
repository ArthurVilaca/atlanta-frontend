import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import './index.css';

class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <div className="suport">
                Contato: (31) 9 9999-9999
                <div>
                    CHAT
                </div>
            </div>
        );
    }
}

export default withRouter(Support)