var navbar = document.getElementById("navbar");
        var menu = document.getElementById("menu");
        window.onscroll = function () {
            if (window.pageYOffset >= menu.offsetTop) {
                navber.classlist.add("sticky");
            }
            else {
                navbar.classList.remove("sticky");
            }
        }