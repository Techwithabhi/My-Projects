document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector("input");

    // Smooth hover effect on input
    searchBox.addEventListener("focus", () => {
        searchBox.style.backgroundColor = "#fff";
    });

    searchBox.addEventListener("blur", () => {
        searchBox.style.backgroundColor = "transparent";
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Fade-in effect on page load
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease-in-out";
        document.body.style.opacity = "1";
    }, 200);
});
