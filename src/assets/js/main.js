// включение burger_menu по клику

function burgerMenu() {
    let burgerIcon = document.querySelector(".header__burger-btn");
    let closeIcon = document.getElementById("close_icon");
    let burgerMenu = document.getElementById("burger_menu");

    burgerIcon.addEventListener("click", function (e) {
       burgerMenu.classList.toggle("header__navigation_active");
       this.style.display = "none";
       closeIcon.style.display = "block";
    })

    closeIcon.addEventListener("click", function () {
        burgerMenu.classList.toggle("header__navigation_active");
        this.style.display = "none";
        burgerIcon.style.display = "block";
    })
}

burgerMenu();


// якорные ссылки с плавной прокруткой

let anchors = document.querySelectorAll("a[href*='#']");

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();

        let blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// появление кнопки go_top после скролла окна window

let goTop = document.querySelector('.footer__btn-top');

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        goTop.style.opacity = 1
    } else {
        goTop.style.opacity = 0
    }
})

