import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';

class Apresentecao1 extends Component {
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
            <div className="header-1" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <section class="jumbotron text-center">
                    <div class="container">
                    <h1 class="jumbotron-heading">{this.state.config.text1}</h1>
                    <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    <p>
                        <a href="#" class="btn btn-primary my-2">Main call to action</a>
                        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                    </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(Apresentecao1)