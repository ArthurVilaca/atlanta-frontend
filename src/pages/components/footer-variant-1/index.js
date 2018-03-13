import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class FooterVariant1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: this.props.config
        }
    }

    render() {
        return (
            <div onClick={() => {
                    this.props.editComponent(this.state)
                }}>
                <div class="page-footer">
                    <div class="section pre-footer-default text-center text-sm-left novi-background bg-image-custom">
                        <div class="container">
                            <div class="row justify-content-sm-center spacing-55">
                            <div class="col-md-6 col-lg-4">
                                <div class="brand-sm">
                                    <a href="index.html">
                                        <img src="images/logo-default-100x28.png" alt="" width="100" height="28" />
                                    </a>
                                </div>
                                <p>Novi Builder is a perfect solution for everyone who wants to establish a stunningly looking website with lots of useful functions and without extra coding.</p>
                                <div class="group-sm group-middle">
                                <span class="big text-primary">Social media</span>
                                <ul class="inline-list-xxs">
                                    <li>
                                    <a class="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-instagram" href="#"></a>
                                    </li>
                                    <li>
                                    <a class="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-facebook" href="#"></a>
                                    </li>
                                    <li>
                                    <a class="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-twitter" href="#"></a>
                                    </li>
                                    <li>
                                    <a class="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-google-plus" href="#"></a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>Instagram feed</h4>
                                <div class="row spacing-10 instafeed" data-instafeed-user="25025320" data-instafeed-get="tagged" data-instafeed-tagname="tm_business_ui_kit" data-instafeed-sort="most-liked" data-lightgallery="group">
                                    <div class="col-4" data-instafeed-item="">
                                    <div class="thumbnail-instafeed"><a class="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                        <div class="caption">
                                        <ul class="list-inline inline-list-xxs">
                                            <li><span class="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                            <li><span class="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-4" data-instafeed-item="">
                                    <div class="thumbnail-instafeed"><a class="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                        <div class="caption">
                                        <ul class="list-inline inline-list-xxs">
                                            <li><span class="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                            <li><span class="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-4" data-instafeed-item="">
                                    <div class="thumbnail-instafeed"><a class="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                        <div class="caption">
                                        <ul class="list-inline inline-list-xxs">
                                            <li><span class="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                            <li><span class="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-4" data-instafeed-item="">
                                    <div class="thumbnail-instafeed"><a class="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                        <div class="caption">
                                        <ul class="list-inline inline-list-xxs">
                                            <li><span class="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                            <li><span class="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-4" data-instafeed-item="">
                                    <div class="thumbnail-instafeed"><a class="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                        <div class="caption">
                                        <ul class="list-inline inline-list-xxs">
                                            <li><span class="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                            <li><span class="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-4" data-instafeed-item="">
                                    <div class="thumbnail-instafeed"><a class="instagram-link" data-lightgallery="item" href="#" data-images-standard_resolution-url="href"><img class="instagram-image" src="images/_blank.png" alt="" data-images-standard_resolution-url="src"/></a>
                                        <div class="caption">
                                        <ul class="list-inline inline-list-xxs">
                                            <li><span class="novi-icon icon mdi mdi-heart"></span><span data-likes-count="text"></span></li>
                                            <li><span class="novi-icon icon mdi mdi-comment"></span><span data-comments-count="text"></span></li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9 col-lg-4 text-sm-center text-md-left">
                                <h4>Newsletter</h4>
                                <p>Enter your e-mail to get the latest news of Novi Builder.</p>
                                <form class="rd-mailform form-bordered form-centered" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                                <div class="form-group">
                                    <label class="form-label" for="footer-subscribe-email1">Your e-mail address</label>
                                    <input class="form-control" id="footer-subscribe-email1" type="email" name="email" data-constraints="@Email @Required" /> </div>
                                <button class="btn btn-primary btn-block btn-offset-small btn-effect-ujarak" type="submit">Subscribe</button>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="page-footer-default text-center novi-background bg-image">
                        <div class="container">
                            <div class="row spacing-30">
                            <div class="col-lg-8 text-xl-left">
                                <ul class="list-nav">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">Features</a>
                                </li>
                                <li>
                                    <a href="#">Gallery</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                </ul>
                            </div>
                            <div class="col-lg-4 text-xl-right">
                                <p class="rights">Novi Builder
                                    <span class="copyright-year"></span>
                                    <br class="veil-sm" />
                                    <a class="link-underline" href="privacy-policy.html">Privacy Policy</a>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(FooterVariant1)