let nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    let navBackground = document.querySelector(".navbar");
    if(window.pageYOffset > 50){
        navBackground.style.backgroundColor = "black";
    } else {
        navBackground.style.backgroundColor = "transparent";
    }
})

function setNewWeatherImage() {
    document.getElementById("weather-image").src = "images/weather-app.PNG";
}

function setOldWeatherImage() {
    document.getElementById("weather-image").src = "images/weather-app- b&n.PNG";
}

function setNewMoviesImage() {
    document.getElementById("movies-image").src = "images/movies-app.PNG";
}

function setOldMoviesImage() {
    document.getElementById("movies-image").src = "images/movies-app - b&n.PNG";
}

function setNewCalculatorImage() {
    document.getElementById("calculator-image").src = "images/calculator-app.PNG";
}

function setOldCalculatorImage() {
    document.getElementById("calculator-image").src = "images/calculator-app- b&n.PNG";
}