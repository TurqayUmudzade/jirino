let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {

    mainNav.classList.toggle('active');
});

//navbar on scroll
$(function() {
    $(document).scroll(function() {
        var header = $("header");
        header.toggleClass('scrolled', $(this).scrollTop() > header.height());
    });
});