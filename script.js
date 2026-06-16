// Smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

emailjs.init("Qwl6r_WyGYKHyADcS");

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const btn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const loader = document.getElementById("btnLoader");
    const msg = document.getElementById("formMsg");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // UI loading state
        btn.disabled = true;
        btnText.textContent = "Sending...";
        loader.classList.remove("d-none");
        msg.textContent = "";

        emailjs.sendForm(
            "service_s4qqilo",
            "template_hcffevv",
            this
        ).then(() => {

            msg.textContent = "Message sent successfully ✔️";
            msg.className = "success mt-3";

            form.reset();

        }).catch(() => {

            msg.textContent = "Failed to send message ❌ Try again";
            msg.className = "error mt-3";

        }).finally(() => {

            btn.disabled = false;
            btnText.textContent = "Send Message";
            loader.classList.add("d-none");

        });

    });

});