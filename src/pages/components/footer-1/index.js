import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';

class Footer1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: this.props.config
        }
    }

    componentWillReceiveProps(state) {
        this.setState({config: state.config});
    }

    render() {
        return (
            <div className="footer-1" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                        <a>Back to top</a>
                        </p>
                        <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
                        <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default withRouter(Footer1)