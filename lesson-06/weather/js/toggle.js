function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function displayBanner() {
    dayOfWeek = new Date().getDay();
    if (dayOfWeek == 6) {
        document.querySelector('#banner').style.display = "block";
    }
    console.log(dayOfWeek);
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}