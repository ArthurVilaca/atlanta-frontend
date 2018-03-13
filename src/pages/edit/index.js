import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { SketchPicker, HuePicker, AlphaPicker } from 'react-color';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './edit.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = null
    }
    
    componentWillReceiveProps(state) {
        this.setState(state.config);
    }

    handleBackgroundColor = (color) => {
        this.setState({ backgroundColor: color.hex });
        this.props.changeProperty(this.state)
    }

    render() {
        if(!this.state) {
            return null;
        }
        return (
            <div className="content-edit">
                Edição do Componente
                {
                    this.state.backgroundColor &&  <div className="prop-edit">
                    Cor de fundo: <SketchPicker
                        color={ this.state.backgroundColor }
                        onChangeComplete={ this.handleBackgroundColor } />
                    </div>
                }

                {
                    this.state.text1 &&  <div className="prop-edit">
                        <TextField hintText="Texto 1" />
                    </div>
                }

                <div>
                    <RaisedButton label="Salvar"
                        primary={true}
                        onClick={() => {
                            this.setState(null)
                        }} />
                </div>
            </div>
        );
    }
}

export default withRouter(Edit)