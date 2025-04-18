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

window.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-container");
    let timers = {}; 

    function Visibility() {
        images.forEach((container, index) => {
            const rect = container.getBoundingClientRect();

            if (rect.top <= 0 && rect.bottom >= window.innerHeight) {

                if (!container.classList.contains("visible")) {
                    timers[index] = setTimeout(() => {
                        container.classList.add("visible");
                    }, 100); 
                }
            } 

            if (rect.top > window.innerHeight) {
                container.classList.remove("visible");
            
                if (timers[index]) {
                    clearTimeout(timers[index]);
                    delete timers[index];
                }
            }
        });
    }

    window.addEventListener("scroll", Visibility);
    Visibility(); 
});
