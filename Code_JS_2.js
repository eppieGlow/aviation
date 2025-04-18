//cette page à été réalisée par Adam
let lastScroll = 0;

window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    let image = document.getElementById("A350");

    let moveX=scrollPosition * 2; 

    image.style.transform = `translateX(${moveX}px)`;
});


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

const prec = document.getElementById("prec");
const suiv = document.getElementById("suiv");
const carroussel = document.querySelector(".carroussel-items");
const items = document.querySelectorAll(".carroussel button");

let currentIndex = 0;
const visibleItems = 4; 
const totalItems = items.length;
const gap = 10;

function updateCarroussel() {
    const containerWidth = document.querySelector(".carroussel").offsetWidth;

    const totalGapWidth = (visibleItems - 1) * gap;
    const itemWidth = (containerWidth - totalGapWidth) / visibleItems;

    items.forEach(item => {
        item.style.width = `${itemWidth}px`;
    });

    const step = itemWidth + gap; 
    carroussel.style.transform = `translateX(-${currentIndex * step}px)`;
}

suiv.addEventListener("click", () => {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
    } else {
        currentIndex = totalItems - visibleItems; 
    }
    updateCarroussel();
});

prec.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = 0;
    }
    updateCarroussel();
});

window.addEventListener("resize", updateCarroussel); 
updateCarroussel();

function ligne() {
    window.location.href = "airbus_general.html"
}

function tourisme() {
    window.location.href = "avions_tourisme.html"
}

function militaire() {
    window.location.href = "avions_militaire.html"
}

function cargo() {
    window.location.href = "avions_cargo.html"
}

function helico() {
    window.location.href = "avions_helico.html"
}

function autre() {
    window.location.href = "avions_autres.html"
}

function logo_1() {
    window.location.href = "airbus_general.html"
}

function logo_5(){
    window.location.href = "dasault général.html"
}

function logo_9() {
    window.location.href = "lokheed_martin.html"
}


