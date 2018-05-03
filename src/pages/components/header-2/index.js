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
                    <a href="#" className="navbar-brand px-4">canvas</a>
                    <button className="navbar-toggler mx-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">HOME</a>
                            </li>
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">FEATURES</a>
                            </li>
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">PAGES</a>
                            </li>
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">PORTFOLIO</a>
                            </li>
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">BLOG</a>
                            </li>
                            <li className="nav-item px-3 py-3">
                                <a href="#" className="nav-link">SHOP</a>
                            </li>
                            <li className="nav-item pl-3 pr-4 py-3">
                                <a href="#" className="nav-link">SHORTCODES</a>
                            </li>
                            <li className="icons"></li>
                            <li className="nav-item px-4 py-3">
                                <a href="#" className="nav-link"><i className="fa fa-search" aria-hidden="true"></i></a>
                            </li>
                            <li className="nav-item pl-1 pr-5 py-3">
                                <a href="#" className="nav-link">
                                    <div className="icon-wrapper">
                                        <i className="fa fa-shopping-cart"></i>
                                        <span className="badge">5</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header2)