document.querySelectorAll(".question_title").forEach(item => {
    item.onclick = (e) => {
        let question = e.target.parentNode.parentNode.parentNode;
        question.classList.toggle("question-active");
    }
});

document.querySelectorAll(".indicator").forEach(item => {
    item.onclick = (e) => {
        let question = e.target.parentNode.parentNode;
        question.classList.toggle("question-active");
    }
});

document.querySelector(".left_btn").onclick = () => {
    document.querySelector(".slick-prev").click();
}

document.querySelector(".right_btn").onclick = () => {
    document.querySelector(".slick-next").click();
}


document.querySelector(".burger").onclick = () => {
    document.querySelector(".line_burger").classList.toggle("active_burger");
    document.querySelector(".burger_content").classList.toggle("dn");
};

document.querySelector(".controller").onclick = () => {
    document.querySelector(".line_burger").classList.toggle("active_burger");
    document.querySelector(".burger_content").classList.toggle("dn");
};




$(document).ready(function() {
    var $slider = $('.sliders');
    var $progressBar = $('.progress');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $('.sliders').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        cssEase: 'linear'
    });
});