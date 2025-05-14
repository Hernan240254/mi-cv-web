document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, 500);
    });
});
