import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header3 extends Component {
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
            <nav className="navbar navbar-expand-lg navbar-light header-st-3" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <div className="container">
                    <a href="#" className="navbar-brand">canvas</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item px-4 py-4 active">
                                <a href="#">
                                    <span className="nav-link">HOME</span>
                                    <span className="nav-link-description">Lets Start</span>
                                </a>
                            </li>
                            <li className="separator"></li>
                            <li className="nav-item px-4 py-4">
                                <a href="#">
                                    <span className="nav-link">FEATURES</span>
                                    <span className="nav-link-description">Out Of The Box</span>
                                </a>
                            </li>
                            <li className="separator"></li>
                            <li className="nav-item px-4 py-4">
                                <a href="#">
                                    <span className="nav-link">PAGES</span>
                                    <span className="nav-link-description">Templates</span>
                                </a>
                            </li>
                            <li className="separator"></li>
                            <li className="nav-item px-4 py-4">
                                <a href="#">
                                    <span className="nav-link">PORTFOLIO</span>
                                    <span className="nav-link-description">Awesome Works</span>
                                </a>
                            </li>
                            <li className="separator"></li>
                            <li className="nav-item px-4 py-4">
                                <a href="#">
                                    <span className="nav-link">BLOG</span>
                                    <span className="nav-link-description">Latest News</span>
                                </a>
                            </li>
                            <li className="separator"></li>
                            <li className="nav-item px-4 py-4">
                                <a href="#">
                                    <span className="nav-link">SHOP</span>
                                    <span className="nav-link-description">Buy Now</span>
                                </a>
                            </li>
                            <li className="separator"></li>
                            <li className="nav-item px-4 py-4">
                                <a href="#">
                                    <span className="nav-link">SHORTCODES</span>
                                    <span className="nav-link-description">Amazing Elements</span>
                                </a>
                            </li>
                            <li className="separator"></li>
                            <li className="px-4 my-auto">
                                <a href="#" className="nav-link"><i className="fa fa-search" aria-hidden="true"></i></a>
                            </li>
                            <li className="px-2 my-auto">
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

export default withRouter(Header3)