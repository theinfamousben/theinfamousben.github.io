function setValues() {
    document.getElementById('years-coded').innerHTML = new Date().getFullYear() - 2020;
}

document.addEventListener('DOMContentLoaded', setValues);