$(document).ready(function() {

    $('.color-choose input').on('click', function() {
        var productColor = $(this).attr('data-image');

        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + productColor + ']').addClass('active');
        $('.product-img-cfg>img[data-image = ' + productColor + ']').addClass('active');
        $(this).addClass('active');
    });


    $('.cable-config a').on('click', function() {
        $('.product-config').removeClass('disable');
    });

    $('.btn-detail--close button').on('click', function() {
        $('.product-config').addClass('disable');
    });


});