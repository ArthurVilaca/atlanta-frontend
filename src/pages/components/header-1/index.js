import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';

class Header1 extends Component {
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
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                    <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <a className="p-2 text-dark">Features</a>
                        <a className="p-2 text-dark">Enterprise</a>
                        <a className="p-2 text-dark">Support</a>
                        <a className="p-2 text-dark">Pricing</a>
                    </nav>
                    <a className="btn btn-outline-primary">Sign up</a>
                </div>
            </div>
        );
    }
}

export default withRouter(Header1)