import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class FooterVariant2 extends Component {
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
                <footer class="page-footer">
                    <section class="section box-wrap">
                        <div class="box-wrap-map">
                        <div class="google-map-container" data-center="6036 Richmond hwy., Alexandria, VA, 2230" data-styles="[{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#e9e9e9&quot;},{&quot;lightness&quot;:17}]},{&quot;featureType&quot;:&quot;landscape&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f5f5f5&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:17}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:29},{&quot;weight&quot;:0.2}]},{&quot;featureType&quot;:&quot;road.arterial&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:18}]},{&quot;featureType&quot;:&quot;road.local&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:16}]},{&quot;featureType&quot;:&quot;poi&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f5f5f5&quot;},{&quot;lightness&quot;:21}]},{&quot;featureType&quot;:&quot;poi.park&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#dedede&quot;},{&quot;lightness&quot;:21}]},{&quot;elementType&quot;:&quot;labels.text.stroke&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;on&quot;},{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:16}]},{&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;saturation&quot;:36},{&quot;color&quot;:&quot;#333333&quot;},{&quot;lightness&quot;:40}]},{&quot;elementType&quot;:&quot;labels.icon&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;transit&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f2f2f2&quot;},{&quot;lightness&quot;:19}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#fefefe&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#fefefe&quot;},{&quot;lightness&quot;:17},{&quot;weight&quot;:1.2}]}]">
                            <div class="google-map"></div>
                            <ul class="google-map-markers">
                            <li data-location="6036 Richmond hwy., Alexandria, VA, 2230" data-description="6036 Richmond hwy., Alexandria, VA, 2230" data-icon="images/gmap_marker.png" data-icon-active="images/gmap_marker_active.png"></li>
                            </ul>
                        </div>
                        </div>
                        <div class="box-wrap-content">
                        <div class="container">
                            <div class="box-wrap-content-interactive">
                            <div class="box-contacts">
                                <h4>Address</h4>
                                <address>
                                <p>6036 Richmond hwy., Alexandria, VA, 2230</p>
                                </address>
                                <h4>Phone</h4>
                                <ul class="list-0">
                                <li>
                                    <a class="link link-sm link-gray-darker" href="callto:#">+1 (409) 987–5874</a>
                                </li>
                                <li>
                                    <a class="link link-sm link-gray-darker" href="callto:#">+1 (409) 455–5454</a>
                                </li>
                                </ul>
                                <h4>E-mail</h4>
                                <a class="link-gray" href="mailto:#">info@demolink.org</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section class="section pre-footer-default text-center text-sm-left novi-background bg-image-custom">
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
                                    <a class="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-instagram"></a>
                                </li>
                                <li>
                                    <a class="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-facebook"></a>
                                </li>
                                <li>
                                    <a class="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-twitter"></a>
                                </li>
                                <li>
                                    <a class="icon novi-icon icon-xxs icon-circle icon-trout-outline icon-effect-1 fa fa-google-plus"></a>
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
                                <label class="form-label" for="footer-subscribe-email">Your e-mail address</label>
                                <input class="form-control" id="footer-subscribe-email" type="email" name="email" data-constraints="@Email @Required"/> </div>
                                <button class="btn btn-primary btn-block btn-offset-small btn-effect-ujarak" type="submit">Subscribe</button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section class="page-footer-default text-center novi-background bg-image">
                        <div class="container">
                        <div class="row spacing-30">
                            <div class="col-lg-8 text-lg-left">
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
                            <div class="col-lg-4 text-lg-right">
                            <p class="rights">Novi Builder&nbsp;©&nbsp;
                                <span class="copyright-year"></span>.&nbsp;
                                <br class="veil-sm" />
                                <a class="link-underline" href="privacy-policy.html">Privacy Policy</a>
                            </p>
                            </div>
                        </div>
                        </div>
                    </section>
                </footer>
            </div>
        );
    }
}

export default withRouter(FooterVariant2)