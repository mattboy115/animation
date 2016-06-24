$(document).ready(function(){
    if (Modernizr.canvas) {

        $('.carousel').slick({
            autoplay: true,
            arrows: true,
            dots: true,
            draggable: true,
            responsive: true,
            respondTo: window
        });

        $(".dropdown").hover(function() {
            $(this).children("ul").slideToggle();
        });

        $(".video_toggle button").click(function() {
            $(".video_toggle video").slideToggle(150);
        });

        $(".audio_toggle button").click(function() {
            $('.audio_toggle audio').toggleClass('hidden', '.notHidden');
        });

    }

    else {
        alert("This browser doesn't support canvas.");
    }
});
