import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Gallery extends Component {
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
            <div className="gallery text-center" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <h1 className="pt-5 pb-3">OUR LATEST WORKS</h1>
                <hr/>
                <div className="row pt-5">
                    <div className="col-md-3">
                        <a href="assets/img/gallery/gallery00.jpg" data-toggle="lightbox" data-gallery="example-gallery">
                            <img src="assets/img/gallery/gallery00.jpg" className="img-fluid-gallery" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="assets/img/gallery/gallery01.jpg" data-toggle="lightbox" data-gallery="example-gallery">
                            <img src="assets/img/gallery/gallery01.jpg" className="img-fluid-gallery" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="assets/img/gallery/gallery02.jpg" data-toggle="lightbox" data-gallery="example-gallery">
                            <img src="assets/img/gallery/gallery02.jpg" className="img-fluid-gallery" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="assets/img/gallery/gallery03.jpg" data-toggle="lightbox" data-gallery="example-gallery">
                            <img src="assets/img/gallery/gallery03.jpg" className="img-fluid-gallery" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="assets/img/gallery/gallery04.jpg" data-toggle="lightbox" data-gallery="example-gallery">
                            <img src="assets/img/gallery/gallery04.jpg" className="img-fluid-gallery" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="assets/img/gallery/gallery05.jpg" data-toggle="lightbox" data-gallery="example-gallery">
                            <img src="assets/img/gallery/gallery05.jpg" className="img-fluid-gallery" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="assets/img/gallery/gallery06.jpg" data-toggle="lightbox" data-gallery="example-gallery">
                            <img src="assets/img/gallery/gallery06.jpg" className="img-fluid-gallery" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="assets/img/gallery/gallery07.jpg" data-toggle="lightbox" data-gallery="example-gallery">
                            <img src="assets/img/gallery/gallery07.jpg" className="img-fluid-gallery" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Gallery)