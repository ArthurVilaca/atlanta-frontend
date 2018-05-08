import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Counter extends Component {
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
            <div className="container counter" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <div className="row">
                    <div className="col-lg-3 text-center">
                        <i className="fa fa-code fa-4x" aria-hidden="true"></i>
                        <h1 className="py-3">846K</h1>
                        <hr/>
                        <h2 className="pt-3">LINES OF CODES</h2>
                    </div>
                    <div className="col-lg-3 text-center">
                        <i className="fa fa-magic fa-4x" aria-hidden="true"></i>
                        <h1 className="py-3">21700</h1>
                        <hr/>
                        <h2 className="pt-3">KBS OF HTML FILES</h2>
                    </div>
                    <div className="col-lg-3 text-center">
                        <i className="fa fa-file-text fa-4x" aria-hidden="true"></i>
                        <h1 className="py-3">408</h1>
                        <hr/>
                        <h2 className="pt-3">NO. OF TEMPLATES</h2>
                    </div>
                    <div className="col-lg-3 text-center">
                        <i className="fa fa-clock-o fa-4x" aria-hidden="true"></i>
                        <h1 className="py-3">1400</h1>
                        <hr/>
                        <h2 className="pt-3">HOURS OF CODING</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Counter)