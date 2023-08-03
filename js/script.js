//EFEITO ESCONDER MENU, QUANDO CHEGAR NA ABA CARDAPIO

document.addEventListener("DOMContentLoaded", function(){
    let menu = document.getElementById("header");
    var lastScrollPosition = 0;
    var hideMenuScroll = 200; 

    window.addEventListener("scroll", function() {
        var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollPosition > lastScrollPosition) {
            menu.style.top = "-" + menu.offsetHeight + "px";
        } else {
            menu.style.top = "0";
        }

        lastScrollPosition = currentScrollPosition;
    });
});
})