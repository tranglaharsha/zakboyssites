$(document).ready(function () {
    $('.nav-item.dropdown').mouseover(function () {
        console.log('hoverd');
        $(this).find('.dropdown-menu').addClass('show');
    });
    $('.nav-item.dropdown').mouseleave(function () {
        console.log('hoverd');
        $(this).find('.dropdown-menu.show').removeClass('show');
    });
});