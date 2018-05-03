import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Clients extends Component {
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
            <div style={this.state.config} className="container"
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <section className="clients-logos slider">
                    <div className="slide"><img src="assets/img/clients/1.png" /></div>
                    <div className="slide"><img src="assets/img/clients/2.png" /></div>
                    <div className="slide"><img src="assets/img/clients/3.png" /></div>
                    <div className="slide"><img src="assets/img/clients/4.png" /></div>
                    <div className="slide"><img src="assets/img/clients/5.png" /></div>
                    <div className="slide"><img src="assets/img/clients/6.png" /></div>
                    <div className="slide"><img src="assets/img/clients/6.png" /></div>
                </section>
            </div>
        );
    }
}

export default withRouter(Clients)