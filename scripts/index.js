function setValues() {
    document.getElementById('years-coded').innerHTML = yearsSince("2020-01-01");
    document.getElementById('age').innerHTML = yearsSince("2011-02-12");
}

//thx chatgpt
function yearsSince(dateString) {
    const startDate = new Date(dateString);
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    
    // Check if the anniversary has passed this year
    const hasCompletedThisYear = 
        now.getMonth() > startDate.getMonth() ||
        (now.getMonth() === startDate.getMonth() && now.getDate() >= startDate.getDate());
        
    return hasCompletedThisYear ? years : years - 1;
}

document.addEventListener('DOMContentLoaded', setValues);