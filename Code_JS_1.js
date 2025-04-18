//cette page à été réalisée par Adam
function avions() {
    window.location.href = "Avions.html";
}

function histoire() {
    window.location.href = "Histoire.html";
}

function actualite() {
    window.location.href = "actualite.html";
} 

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

function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const text = "Bienvenue sur LE site de l'aviation !";
let i = 0;
async function typeWriter() {
    if (i < text.length) {
        document.getElementById("texte_dynamique").innerHTML += text.charAt(i);
        i+=1;
        setTimeout(typeWriter, 100);
    }
}

async function repetition() {
    while (true) { 
        i = 0; 
        await typeWriter();
        await attendre(10000); 
        document.getElementById("texte_dynamique").innerHTML = ""; 
    }
}

repetition()

