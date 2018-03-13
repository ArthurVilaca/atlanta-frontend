import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { SketchPicker } from 'react-color';
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
        this.props.changeProperty(this.state);
    }

    saveData = (data) => {
        this.setState(null);
        this.props.saveData();
    }

    handleText1Change = (event) => {
        this.state.text1 = event.target.value;
        this.props.changeProperty(this.state);
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
                        <TextField
                            onChange={this.handleText1Change}
                            className="text-field-edit"
                            defaultValue={this.state.text1}
                            floatingLabelText="Texto 1" />
                    </div>
                }

                <div className="item-edit">
                    <RaisedButton label="Salvar"
                        className="sketch-picker"
                        primary={true}
                        onClick={() => {
                            this.saveData()
                        }} />
                </div>
            </div>
        );
    }
}

export default withRouter(Edit)