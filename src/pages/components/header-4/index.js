import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header4 extends Component {
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
            <div style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <nav className="navbar navbar-expand-lg navbar-light header-st-4 d-none d-lg-block">
                    <div className="container">
                        <a href="#" className="navbar-brand py-3">canvas</a>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light header-st-4">
                    <div className="container">
                        <a href="#" className="navbar-brand d-xl-none d-lg-none">HTTPLAY</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item mx-2 py-4">
                                    <a href="#" className="nav-link active">HOME</a>
                                </li>
                                <li className="nav-item mx-2 py-4">
                                    <a href="#" className="nav-link">IMAGENS</a>
                                </li>
                                <li className="nav-item mx-2 py-4">
                                    <a href="#" className="nav-link">CONTATO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header4)