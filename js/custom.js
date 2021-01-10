$(document).ready(function () {

    $('.main-banner').slick({
        centerMode: true,
        centerPadding: '170px',
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2600,
        arrows: true,
        nextArrow: '<a class="btn btn-secondary slick-btn next"></a>',
        prevArrow: '<a class="btn btn-secondary slick-btn prev"></a>',
        dots: true,
        dotsClass: 'custom_paging',

        customPaging: function (slider, i) {
            //FYI just have a look at the object to find available information
            //press f12 to access the console in most browsers
            //you could also debug or look in the source
            console.log(slider);
            return (i + 1) + '/' + slider.slideCount;
        },
        responsive: [{
                breakpoint: 1500,
                settings: {
                    centerPadding: '100px'
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    centerPadding: '20px'
                }

            }
        ]
    });

    $(".smooth-scroll").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

    $('.chart').easyPieChart({
        barColor: '#4db95a',
        scaleColor: false,
        lineWidth: 20,
        lineCap: 'round',
        size: 150
    });


    $('.read-more-btn').click(function () {

        if ($('.more-text').css('display') == 'none') {
            $('.more-text').css("display", "block");
            $('.read-more-btn').text('Read Less');
        } else {
            $('.more-text').css("display", "none");
            $('.read-more-btn').text('Read More');
        }
        

        $(".more-text ul li").each(function (index) {
            $(this).delay(400 * index).fadeIn(300);
            // console.log(index);
        });

    });

    $(".custom-amnt").hide();

    $('.coin-group .coin').click(function (e) {

        e.preventDefault();

        $('.coin-group .coin').removeClass("active");
        $(this).addClass("active");
        $(".custom-amnt").hide();

        if ($(this).val() !== 'other') {

            var val = $(this).val().toString();
            $('.donateAmnt').html(val);
        } else {
            $(".custom-amnt").show();
        }
    });

    $(".custom_amnt").keyup(function () {
        var val = $(this).val().toString();
        console.log(val);
        $('.donateAmnt').html(val);
    });

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    $('.err_msg').hide();

    $('.donate-btn').click(function (e) {

        e.preventDefault();

        var email = $('input#donorEmail').val();


        if ((email == '') || (!validateEmail(email))) {
            $('input#donorEmail').parent().addClass('error');
            $('.err_msg').show();

            $('input#donorEmail').keypress(function () {
                $('input#donorEmail').parent().removeClass('error');
                $('.err_msg').hide();
            });

        } else {

            $(".donate-form").unbind('submit').submit()
        }

    });

    $('.err_msg .close').click(function (e) {
        $('input#donorEmail').parent().removeClass('error');
        $('.err_msg').hide();
    });


    $(".links").each(function (index) {
        $(this).delay(400 * index).fadeIn(300);
    });



});