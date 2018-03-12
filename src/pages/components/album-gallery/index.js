import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class AlbumGallery extends Component {
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
                <section class="section section-lg bg-white novi-background bg-image">
                    <div class="container">
                        <h3><span class="heading-3">Album</span> Gallery</h3>
                        <div class="row justify-content-center">
                            <div class="col-sm-10 col-lg-6">
                                <div class="thumbnail-classic" data-lightgallery="dynamic" data-lg-dynamic-elements="[{&quot;thumb&quot;:&quot;images/grid-gallery-1-640x426.jpg&quot;,&quot;src&quot;:&quot;images/grid-gallery-1-1200x800_original.jpg&quot;},{&quot;thumb&quot;:&quot;images/grid-gallery-2-640x426.jpg&quot;,&quot;src&quot;:&quot;images/grid-gallery-2-1200x800_original.jpg&quot;},{&quot;thumb&quot;:&quot;images/grid-gallery-3-640x426.jpg&quot;,&quot;src&quot;:&quot;images/grid-gallery-3-1200x800_original.jpg&quot;}]">
                                    <figure><img src="images/grid-gallery-1-640x426.jpg" alt="" width="640" height="426"/>
                                    </figure>
                                    <div class="caption">
                                        <p class="caption-title">Album Gallery #1</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-10 col-lg-6">
                                <div class="thumbnail-classic" data-lightgallery="dynamic" data-lg-dynamic-elements="[{&quot;thumb&quot;:&quot;images/grid-gallery-4-640x426.jpg&quot;,&quot;src&quot;:&quot;images/grid-gallery-4-1200x800_original.jpg&quot;},{&quot;thumb&quot;:&quot;images/grid-gallery-7-640x426.jpg&quot;,&quot;src&quot;:&quot;images/grid-gallery-7-1200x800_original.jpg&quot;},{&quot;thumb&quot;:&quot;images/grid-gallery-8-640x426.jpg&quot;,&quot;src&quot;:&quot;images/grid-gallery-8-1200x800_original.jpg&quot;}]">
                                    <figure><img src="images/grid-gallery-4-640x426.jpg" alt="" width="640" height="426"/>
                                    </figure>
                                    <div class="caption">
                                        <p class="caption-title">Album Gallery #2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(AlbumGallery)