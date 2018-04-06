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
                <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                    <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
                    <nav class="my-2 my-md-0 mr-md-3">
                        <a class="p-2 text-dark" href="#">Features</a>
                        <a class="p-2 text-dark" href="#">Enterprise</a>
                        <a class="p-2 text-dark" href="#">Support</a>
                        <a class="p-2 text-dark" href="#">Pricing</a>
                    </nav>
                    <a class="btn btn-outline-primary" href="#">Sign up</a>
                </div>
            </div>
        );
    }
}

export default withRouter(Header1)