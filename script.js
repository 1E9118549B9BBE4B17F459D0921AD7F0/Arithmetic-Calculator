document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links");
    const sections = {
        home: document.getElementById("home-title"),
        about: document.getElementById("about-title")
    };

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Allow smooth scrolling
            const targetId = this.getAttribute("href").substring(1); 
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            }

            // Remove 'active' from all section titles
            Object.values(sections).forEach(section => section.classList.remove("active"));

            // Add 'active' class to the selected section heading
            const target = this.getAttribute("data-target"); 
            if (sections[target]) {
                sections[target].classList.add("active");
            }
        });
    });
});