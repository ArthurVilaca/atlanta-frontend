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
            <div>
                <div className="suport">
                    <h3>Contato</h3>
                </div>
                <div className="suport">
                    Belo Horizonte: (31) 9 9999-9999
                </div>
                <div className="suport">
                    São Paulo: (31) 9 9999-9999
                </div>
                <div className="suport">
                    Rio de Janeiro: (31) 9 9999-9999
                </div>
                <div className="suport">
                    Email: contato@httplay.com.br
                </div>
                <div className="chat">
                    CHAT
                </div>
            </div>
        );
    }
}

export default withRouter(Support)