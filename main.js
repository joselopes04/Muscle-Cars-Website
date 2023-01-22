window.addEventListener("scroll", () => {

    if (window.scrollY < 100) {
        document.getElementById("top-button").style.opacity = 0;
    } else {
        document.getElementById("top-button").style.opacity = 1;
    }

})