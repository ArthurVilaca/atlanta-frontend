import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class FooterVariant1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: this.props.config
        }
    }

    singNewsletter = (email) => {
        console.log(email)
    }

    render() {
        return (
            <div style={this.state.config}
                onClick={() => {
                    this.props.editComponent(this.state)
                }}>
                <div>
                    <div className="row fix-row justify-content-sm-center spacing-55">
                        <div className="col-md-6 col-lg-4">
                            <div className="brand-sm">
                                <a href="index.html">
                                    <img src="images/logo-default-100x28.png" alt="" width="100" height="28" />
                                </a>
                            </div>
                            <p>Novi Builder is a perfect solution for everyone who wants to establish a stunningly looking website with lots of useful functions and without extra coding.</p>
                            <div className="group-sm group-middle">
                            <span className="big text-primary">Social media</span>
                            <ul className="inline-list-xxs">
                                <li>
                                <a className="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-instagram" href="#"></a>
                                </li>
                                <li>
                                <a className="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-facebook" href="#"></a>
                                </li>
                                <li>
                                <a className="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-twitter" href="#"></a>
                                </li>
                                <li>
                                <a className="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-google-plus" href="#"></a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <h4>Instagram feed</h4>
                            <div className="row spacing-10 instafeed" data-instafeed-user="25025320" data-instafeed-get="tagged" data-instafeed-tagname="tm_business_ui_kit" data-instafeed-sort="most-liked" data-lightgallery="group">
                                <div className="col-4" data-instafeed-item="">
                                <div className="thumbnail-instafeed"><a className="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img className="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                    <div className="caption">
                                    <ul className="list-inline inline-list-xxs">
                                        <li><span className="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                        <li><span className="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-4" data-instafeed-item="">
                                <div className="thumbnail-instafeed"><a className="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img className="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                    <div className="caption">
                                    <ul className="list-inline inline-list-xxs">
                                        <li><span className="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                        <li><span className="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-4" data-instafeed-item="">
                                <div className="thumbnail-instafeed"><a className="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img className="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                    <div className="caption">
                                    <ul className="list-inline inline-list-xxs">
                                        <li><span className="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                        <li><span className="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-4" data-instafeed-item="">
                                <div className="thumbnail-instafeed"><a className="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img className="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                    <div className="caption">
                                    <ul className="list-inline inline-list-xxs">
                                        <li><span className="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                        <li><span className="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-4" data-instafeed-item="">
                                <div className="thumbnail-instafeed"><a className="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img className="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                    <div className="caption">
                                    <ul className="list-inline inline-list-xxs">
                                        <li><span className="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                        <li><span className="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-4" data-instafeed-item="">
                                <div className="thumbnail-instafeed"><a className="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img className="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                    <div className="caption">
                                    <ul className="list-inline inline-list-xxs">
                                        <li><span className="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                        <li><span className="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-4 text-sm-center text-md-left">
                            <h4>Newsletter</h4>
                            <p>Enter your e-mail to get the latest news of Novi Builder.</p>
                            <form className="rd-mailform form-bordered form-centered" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                                <div className="form-group">
                                    <label className="form-label">Your e-mail address</label>
                                    <input className="form-control" id="footer-subscribe-email1" type="email" name="email" data-constraints="@Email @Required" />
                                </div>
                                <button
                                    onClick={this.singNewsletter('emaIL')}
                                    className="btn btn-primary btn-block btn-offset-small btn-effect-ujarak"
                                    type="submit"
                                    >Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(FooterVariant1)