// Logos
const currGameLogo = document.getElementById('currGameLogo');
const newGameLogo = document.getElementById('newGameLogo');

// Dropdowns
const currGameDD = document.getElementById('dropdownMenuButton1');
const newGameDD = document.getElementById('dropdownMenuButton2');

// Dropdown Menu Items
const ddOptionVal = document.getElementById('ddOptionVal');
const ddOptionCSGO = document.getElementById('ddOptionCSGO');
const ddOptionOW = document.getElementById('ddOptionOW');
const ddOptionVal2 = document.getElementById('ddOptionVal2');
const ddOptionCSGO2 = document.getElementById('ddOptionCSGO2');
const ddOptionOW2 = document.getElementById('ddOptionOW2');

// User Input
const currentSens = document.getElementById('currentSens');
const tbCurrentGameDPI = document.getElementById('currentDPI');
const tbNewGameDPI = document.getElementById('newDPI');

// Calculated Input
let game1 = 0;
let game2 = 0;
const newSens = document.getElementById('newSens');

// Submit Button
const calculateButton = document.getElementById('calculateButton');

ddOptionVal.addEventListener("click", (event) => {
    currGameDD.textContent = ddOptionVal.textContent;
    currGameLogo.src = "./imgs/valoranticon.jpg";
    game1 = 3.182;
});

ddOptionCSGO.addEventListener("click", (event) => {
    currGameDD.textContent = ddOptionCSGO.textContent;
    currGameLogo.src = "./imgs/csgo.jpeg";
    game1 = 1.0;
});

ddOptionOW.addEventListener("click", (event) => {
    currGameDD.textContent = ddOptionOW.textContent;
    currGameLogo.src = "./imgs/overwatch.jpg";
    game1 = 0.3;
});

ddOptionVal2.addEventListener("click", (event) => {
    newGameDD.textContent = ddOptionVal2.textContent;
    newGameLogo.src = "./imgs/valoranticon.jpg";
    game2 = 3.182;
});

ddOptionCSGO2.addEventListener("click", (event) => {
    newGameDD.textContent = ddOptionCSGO2.textContent;
    newGameLogo.src = "./imgs/csgo.jpeg";
    game2 = 1.0;
});

ddOptionOW2.addEventListener("click", (event) => {
    newGameDD.textContent = ddOptionOW2.textContent;
    newGameLogo.src = "./imgs/overwatch.jpg";
    game2 = 0.3;
});

calculateButton.addEventListener("click", (event) => {
    let dpi = tbCurrentGameDPI.value;
    let sens = currentSens.value;
    let ndpi = tbNewGameDPI.value;

    newSens.value = calcSens(dpi, sens, ndpi, game1, game2).toFixed(3);
});


function calcSens(dpi, sens, ndpi, game1, game2) {
    return (dpi * sens * game1) / (ndpi * game2);
}






