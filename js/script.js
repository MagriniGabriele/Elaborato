const left_menu = document.getElementById('subnav_hidden');


window.onscroll = function () {
    if (document.documentElement.scrollTop > left_menu.getBoundingClientRect().top) {
        left_menu.style.visibility = 'visible';
    } else {
        left_menu.style.visibility = 'hidden';
    }

}