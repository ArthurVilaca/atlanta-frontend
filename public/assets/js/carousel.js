$(document).ready(function(){
  $('.clients-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

$('.col-md-3 img').replaceWith(function(i, v){
    return $('<div/>', {
        style: 'background-image: url(' + this.src + ');' + 
        'width:' + this.width + 'px;' + 
        'height:' + this.height + 'px;' ,
        class: 'fakeImg'
    })
})