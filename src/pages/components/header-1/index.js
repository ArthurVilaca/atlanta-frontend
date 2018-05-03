import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
            <nav className="navbar navbar-expand-lg navbar-light header-st-1" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <div className="container">
                    <a href="#" className="navbar-brand">Httplay</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-2 py-3">
                                <a href="#" className="nav-link">HOME</a>
                            </li>
                            <li className="nav-item mx-2 py-3">
                                <a href="#" className="nav-link">SOBRE</a>
                            </li>
                            <li className="nav-item mx-2 py-3">
                                <a href="#" className="nav-link active">CONTATO</a>
                            </li>
                            <li className="nav-item mx-2 py-3">
                                <a href="#" className="nav-link">IMAGENS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header1)