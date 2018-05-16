$(document).ready(function () {
    function openMobileMenu () {
        $('.main-menu-mobile').addClass('main-menu-mobile-visible');
        $('body').addClass('no-scroll');
    }

    function closeMobileMenu () {
        $('.main-menu-mobile').removeClass('main-menu-mobile-visible');
        $('body').removeClass('no-scroll');
    }

    $('.main-menu-hamburger').click(openMobileMenu);
    $('.main-menu-mobile-close').click(closeMobileMenu);
});
