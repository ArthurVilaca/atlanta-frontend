import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Service from '../../service';
import './pages.css';

class Pages extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = {
            pages: [],
        }
        this.loadPages();
    }

    loadPages = () => {
        this.service.get('/paginas')
            .then((response) => {
                console.log(response);
                this.setState({
                    pages: [{
                        id: 1,
                        name: 'padariaDoJoao',
                        status: 'Publicado',
                        url: null,
                        preview: 'https://make.wordpress.org/core/files/2016/01/customize-device-preview.gif'
                    },{
                        id: 2,
                        name: 'padariaDoClaudio',
                        status: 'Publicado',
                        url: null,
                        preview: 'http://www.letshost.ie/wp-content/uploads/LH-preview-inner.jpg'
                    }]
                })
            })
            .catch((error) => {
                console.log(error);
            })
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