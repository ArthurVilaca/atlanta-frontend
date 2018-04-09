import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Service from '../../service';

class DealerConfig extends Component {
    constructor(props) {
        super(props);
        this.state = null
    }

    render() {
        return (
            <div>
                <div className="login-wrapper">
                    <div className="login-fields">
                        <h3>Configuração </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(DealerConfig)