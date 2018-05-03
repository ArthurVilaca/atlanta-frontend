import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
            <div className="footer" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <div className="container py-4">
                    <div className="row py-3">
                        <div className="col-md-6 text-left">
                            <p className="pb-2">Copyrights © 2014 All Rights Reserved by Canvas Inc</p>
                            <p className="pb-2"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></p>
                        </div>
                        <div className="col-md-6 text-right">
                            <p className="pb-2">
                                <a className="px-2 facebook" href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a className="px-2 twitter" href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a className="px-2 google" href="#" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                <a className="px-2 vimeo" href="#" target="_blank"><i className="fa fa-vimeo-square" aria-hidden="true"></i></a>
                                <a className="px-2 pinterest" href="#" target="_blank"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                                <a className="px-2 github" href="#" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                                <a className="px-2 linkedin" href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </p>
                            <p className="pb-2">
                                <a className="px-1 email" href="#" target="_blank"><i className="fa fa-envelope-o px-1" aria-hidden="true"></i>info@canvas.com</a> ·
                                <a className="px-1 headphones" href="#" target="_blank"><i className="fa fa-headphones px-1" aria-hidden="true"></i>+91-11-6541-6369</a> ·
                                <a className="px-1 skype" href="#" target="_blank"><i className="fa fa-skype px-1" aria-hidden="true"></i>CanvasOnSkype</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Footer1)