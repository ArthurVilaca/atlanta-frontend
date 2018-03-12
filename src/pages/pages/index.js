import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './pages.css';

class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [{
                id: 1,
                name: 'padariaDoJoao',
                status: 'Publicado',
                url: null,
                preview: null
            },{
                id: 2,
                name: 'padariaDoClaudio',
                status: 'Publicado',
                url: null,
                preview: null
            }],
        }
    }

    render() {
        return (
            <div className="content-pages">
                <GridList
                    cellHeight={180} >
                    <Subheader>Sites</Subheader>
                    {
                        this.state.pages.map((page) => (
                            <GridTile
                                className="site"
                                key={page.id}
                                title={page.name}
                                subtitle={<span><b>{page.status}</b></span>}
                                onClick={() => {
                                    this.props.history.push('/paginas/' + page.id + '/editar' )
                                }}>
                            <img src={page.preview} />
                        </GridTile>
                    ))}
                </GridList>

                <FloatingActionButton
                    secondary={true}
                    className="float-button-pages"
                    onClick={() => {
                        this.props.history.push('/paginas/nova' )
                    }} >
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

export default withRouter(Pages)