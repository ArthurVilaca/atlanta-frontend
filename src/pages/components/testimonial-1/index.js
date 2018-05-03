import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Testimonial1 extends Component {
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
            <div className="testimonial-1" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-9 col-center m-auto">
                            <h2 className="py-5">REVIEWS</h2>
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>   
                                <div className="carousel-inner">
                                    <div className="item carousel-item active">
                                        <div className="img-box"><img src="assets/img/testimonial/1.png" alt="" /></div>
                                        <p className="testimonial">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!”</p>
                                        <p className="overview-1">- John Doe</p>
                                        <p className="overview-2">XYZ Inc.</p>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="img-box"><img src="assets/img/testimonial/1.png" alt="" /></div>
                                        <p className="testimonial">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!”</p>
                                        <p className="overview-1">- John Doe</p>
                                        <p className="overview-2">XYZ Inc.</p>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="img-box"><img src="assets/img/testimonial/1.png" alt="" /></div>
                                        <p className="testimonial">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!”</p>
                                        <p className="overview-1">- John Doe</p>
                                        <p className="overview-2">XYZ Inc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Testimonial1)