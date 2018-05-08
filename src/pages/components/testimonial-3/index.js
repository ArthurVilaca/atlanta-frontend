import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Testimonial3 extends Component {
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
            <div className="testimonial-3" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-9 col-center m-auto">
                            <h2 className="pt-5 pb-3">WHAT CLIENTS SAY?</h2>
                            <hr/>
                            <div id="myCarousel" className="carousel slide pt-4" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="item carousel-item active">
                                        <div className="img-box"><img src="assets/img/testimonial/1.png" alt="" /></div>
                                        <p className="testimonial">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!”</p>
                                        <p className="overview-1">- John Doe</p>
                                        <p className="overview-2">COMPANY NAME</p>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="img-box"><img src="assets/img/testimonial/1.png" alt="" /></div>
                                        <p className="testimonial">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!”</p>
                                        <p className="overview-1">- John Doe</p>
                                        <p className="overview-2">COMPANY NAME</p>
                                    </div>
                                    <div className="item carousel-item">
                                        <div className="img-box"><img src="assets/img/testimonial/1.png" alt="" /></div>
                                        <p className="testimonial">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!”</p>
                                        <p className="overview-1">- John Doe</p>
                                        <p className="overview-2">COMPANY NAME</p>
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

export default withRouter(Testimonial3)