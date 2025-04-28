function typewriter(element) {
    const text = element.innerHTML;
    element.innerHTML = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
}

function observeTypewriter(selector) {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typewriter(entry.target);
                observer.unobserve(entry.target); // Stop observing after the first trigger
            }
        });
    });

    elements.forEach(element => observer.observe(element));
}

// Call the observeTypewriter function with the desired selector
document.addEventListener('DOMContentLoaded', () => {
    observeTypewriter('.typewriter');
});