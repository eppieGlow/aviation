//cette page à été réalisée par Adrien
function avions() {
    window.location.href = "Avions.html";
}

function histoire() {
    window.location.href = "Histoire.html";
}

function acutalite() {
    window.location.href = "Actualite.html";
}

const text = "D'ou commence cette magnifique histoire qui nous plonge tous la tête dans les nuages ?";
let i = 0;
async function typeWriter() {
    if (i < text.length) {
        document.getElementById("texte_dynamique").innerHTML += text.charAt(i);
        i += 1;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
});