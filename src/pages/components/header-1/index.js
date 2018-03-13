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
            <div style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                Hue 1
            </div>
        );
    }
}

export default withRouter(Header1)