import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Header2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: this.props.config
        }
    }

    componentWillReceiveProps(state) {
        // this.setState(state);
        console.log('head2', this.state)
    }

    render() {
        return (
            <div style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                Hue 2
            </div>
        );
    }
}

export default withRouter(Header2)