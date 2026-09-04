
function blinker(blink) {
    document.querySelectorAll('.blinker').forEach(q => {
        q.innerHTML = blink ? "_" : "";
    });
    
    setTimeout(() => blinker(!blink), 300);
}


window.addEventListener('DOMContentLoaded', () => blinker(true));