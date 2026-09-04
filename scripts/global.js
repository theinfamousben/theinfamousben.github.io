
function blinker(blink) {
    document.getElementById('blinker').innerHTML = blink ? "_" : "";
    setTimeout(() => blinker(!blink), 300);
}


window.addEventListener('DOMContentLoaded', () => blinker(true));