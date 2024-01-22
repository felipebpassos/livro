$(document).ready(function () {
    const header = $('header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            header.css('display', 'flex');
        } else {
            header.css('display', 'none');
        }
    });
});
