//cette page à été réalisée par Adam
document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navbar");

    navbar.classList.add("hover");

    function updateNavbarHover() {
        let scrollPosition = window.scrollY; 
        if (scrollPosition > 70) { 
            navbar.classList.remove("hover"); 
        } else { 
            navbar.classList.add("hover"); 
        }
    }

    window.addEventListener("scroll", updateNavbarHover);
});

function cat1() {
    window.location.href = "airbus_militaire.html"
}

function cat2() {
    window.location.href = "dassault_militaire.html"
}

function cat3() {
    window.location.href = "lokheed_martin.html"
}