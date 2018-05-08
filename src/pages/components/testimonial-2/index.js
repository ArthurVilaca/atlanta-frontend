import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Testimonial2 extends Component {
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
            <div className="testimonial-2" style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state.config)
                }}>
                <div className="container py-5">
                    <h1 className="text-center pb-3">Testimonials</h1>
                    <h2 className="text-center pb-4">Check out some of our Client Reviews</h2>
                    <hr/>
                    <div className="row py-4">
                        <div className="col-md-4 border-r py-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="assets/img/testimonial/1.png" alt="" />
                                </div>
                                <div className="col-md-9">
                                    <p className="overview-1">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum repellendus!”</p>
                                    <p className="overview-2">- John Doe</p>
                                    <p className="overview-3">XYZ Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 border-r py-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="assets/img/testimonial/1.png" alt="" />
                                </div>
                                <div className="col-md-9">
                                    <p className="overview-1">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum repellendus!”</p>
                                    <p className="overview-2">- John Doe</p>
                                    <p className="overview-3">XYZ Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="assets/img/testimonial/1.png" alt="" />
                                </div>
                                <div className="col-md-9">
                                    <p className="overview-1">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum repellendus!”</p>
                                    <p className="overview-2">- John Doe</p>
                                    <p className="overview-3">XYZ Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 border-r border-t py-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="assets/img/testimonial/1.png" alt="" />
                                </div>
                                <div className="col-md-9">
                                    <p className="overview-1">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum repellendus!”</p>
                                    <p className="overview-2">- John Doe</p>
                                    <p className="overview-3">XYZ Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 border-r border-t py-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="assets/img/testimonial/1.png" alt="" />
                                </div>
                                <div className="col-md-9">
                                    <p className="overview-1">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum repellendus!”</p>
                                    <p className="overview-2">- John Doe</p>
                                    <p className="overview-3">XYZ Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 border-t py-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="assets/img/testimonial/1.png" alt="" />
                                </div>
                                <div className="col-md-9">
                                    <p className="overview-1">“Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum repellendus!”</p>
                                    <p className="overview-2">- John Doe</p>
                                    <p className="overview-3">XYZ Inc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Testimonial2)