import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: {},
        }
    }

    render() {
        return (
            <div className="content-login">
                <form>
                    <div>
                        <TextField hintText="usuario" />
                    </div>

                    <div>
                        <TextField hintText="senha" type="password" />
                    </div>

                    <div>
                        <RaisedButton label="Login"
                            primary={true}
                            onClick={() => {
                                this.props.history.push('/paginas' )
                            }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Login)