document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".block");

    function checkVisibility() {
        blocks.forEach(block => {
            const rect = block.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                block.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
