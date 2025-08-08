document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.querySelector(".layout__menu-toggle");
    let icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
    let icon_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");
    let aside = document.querySelector(".aside");

    button.addEventListener("click", () => {

        if (!aside.classList.contains("aside-visible")) {

            aside.classList.add("aside-visible");

            icon_bars.style.opacity = 0;
            icon_xmark.style.opacity = 1;

        }else {
            aside.classList.remove("aside-visible");

            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }

    })
})
