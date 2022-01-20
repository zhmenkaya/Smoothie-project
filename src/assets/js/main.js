// console.log(test(5, 2));

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
