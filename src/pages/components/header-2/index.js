import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header2 extends Component {
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
            <nav className="navbar navbar-dark navbar-expand-lg navbar-light header-st-2" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <div className="container">
                    <a href="#" className="navbar-brand px-4">HTTPLAY</a>
                    <button className="navbar-toggler mx-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">HOME</a>
                            </li>
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">SOBRE</a>
                            </li>
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">CONTATO</a>
                            </li>
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">IMAGENS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header2)