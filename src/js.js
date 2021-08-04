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

let htmlNumb = document.getElementById("html-numb");
let counterHtml = 0;
let timerHtml = setInterval(htmlCounting, 80);

 function htmlCounting(){
    if(counterHtml == 50){
        clearInterval();
    }else {
        counterHtml+=1;
        htmlNumb.textContent = counterHtml + "%";
    }
}

let cssNumb = document.getElementById("css-numb");
let counterCss = 0;
let timerCss = setInterval(cssCounting, 150);

 function cssCounting(){
    if(counterCss == 25){
        clearInterval();
    }else {
        counterCss+=1;
        cssNumb.textContent = counterCss + "%";
    }
}

let jsNumb = document.getElementById("js-numb");
let counterJs = 0;
let timerJs = setInterval(jsCounting, 85);

 function jsCounting(){
    if(counterJs == 70){
        clearInterval();
    }else {
        counterJs+=1;
        jsNumb.textContent = counterJs + "%";
    }
}

let bootNumb = document.getElementById("boot-numb");
let counterBoot = 0;
let timerBoot = setInterval(bootCounting, 80);

 function bootCounting(){
    if(counterBoot == 50){
        clearInterval();
    }else {
        counterBoot+=1;
        bootNumb.textContent = counterBoot + "%";
    }
}

let spanishNumb = document.getElementById("spanish-numb");
let counterSpanish = 0;
let timerSpanish = setInterval(spanishCounting, 70);

 function spanishCounting(){
    if(counterSpanish == 100){
        clearInterval();
    }else {
        counterSpanish+=1;
        spanishNumb.innerText = counterSpanish + "%";
    }
}

let englishNumb = document.getElementById("english-numb");
let counterEnglish = 0;
let timerEnglish = setInterval(englishCounting, 75);

 function englishCounting(){
    if(counterEnglish == 90){
        clearInterval();
    }else {
        counterEnglish+=1;
        englishNumb.innerText = counterEnglish + "%";
    }
}

let frenchNumb = document.getElementById("french-numb");
let counterFrench = 0;
let timerFrench = setInterval(frenchCounting, 110);

 function frenchCounting(){
    if(counterFrench == 50){
        clearInterval();
    }else {
        counterFrench+=1;
        frenchNumb.innerText = counterFrench + "%";
    }
}