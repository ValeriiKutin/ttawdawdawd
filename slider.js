$(document).ready(function() {
    console.log("AAAAAAA");
    var $slider = $('.slider_content');
    var $progressBar = $('.slider_controller');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $('.slider_content').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        cssEase: 'linear'
    });
});