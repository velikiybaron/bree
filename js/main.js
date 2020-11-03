$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('stick');
        } else {
            $('.header').removeClass('stick');
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300 ) {
            $('.slider-to-top').addClass('stick');
        } else {
            $('.slider-to-top').removeClass('stick');
        }
    })
    $('.cart').click(function () {
        $('.payment__cart').toggleClass('active');
        $('.paymnet-back').toggleClass('active');
        $('body').addClass('active');
        $('.menu').removeClass('active');
        $('.burger__menu').removeClass('active');
    })
    $('.burger__menu2').click(function () {
        $('.payment__cart').removeClass('active');
        $('.paymnet-back').removeClass('active');
        $('body').removeClass('active');
    })
$('.search_body').hide();
    /// cart-paymnet end  ////
    $( ".search" ).click(
        function() {
          $('.search_body').show( "selected" );
        }
    );
    $('.exit').click(function() {
        $('.search_body').hide( "selected" );
      })
    /// header burger menu start //
    $('.burger__menu').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    })
    /// header burger menu end //
    $('.like').click(function () {
        $(this).toggleClass('active');
    })

    /// cart img selecter start ///
    $(function () {
        $('.image-item1 a').click(function () {
            event.preventDefault();
            var href = $(this);

            $('.image-content1 img').fadeOut(100, function () {
                $(this).attr('src', href.attr('href')).fadeIn(100);
            })
        })
    })
    $(function () {
        $('.image-item2 a').click(function () {
            event.preventDefault();
            var href = $(this);

            $('.image-content2 img').fadeOut(100, function () {
                $(this).attr('src', href.attr('href')).fadeIn(100);
            })
        })
    })
    $(function () {
        $('.image-item3 a').click(function () {
            event.preventDefault();
            var href = $(this);

            $('.image-content3 img').fadeOut(100, function () {
                $(this).attr('src', href.attr('href')).fadeIn(100);
            })
        })
    })
    /// cart img selecter end ///
    //////////////////////////////////////////////////////////////////////////
    /// cart img slider start ///
    $('.section-2').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 1000,
        smartSpeed: 800,

    })
    /// cart img slider end ///
    //////////////////////////////////////////////////////////////////////////
    $('.to-card').click(function () {
        function addOne() {
            $num = $('.cart span').html();
            return +$num + 1;
        }
        $('.cart span').html(addOne());
    })
})

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}