document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".layout__menu-toggle");
    const icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
    const icon_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");
    const aside = document.querySelector(".aside");

    function openAside() {
        aside.classList.add("aside-visible");
        icon_bars.classList.add("icon--hidden");
        icon_xmark.classList.remove("icon--hidden");
    }

    function closeAside() {
        aside.classList.remove("aside-visible");
        icon_bars.classList.remove("icon--hidden");
        icon_xmark.classList.add("icon--hidden");
    }

    button.addEventListener("click", () => {
        if (aside.classList.contains("aside-visible")) {
            closeAside();
        } else {
            openAside();
        }
    });

    const mediaQuery = window.matchMedia("(max-width: 962px)");
    mediaQuery.addEventListener("change", e => {
        if (e.matches) closeAside();
    });

    // Ejecutar al cargar
    if (mediaQuery.matches) closeAside();
});
