//console.log("splash.js started");
let splashElement = document.getElementById('splash')

//console.log(splashElement)
//document.getElementById('splash').innerHTML="Nyugottan. Nyugottan. Mért ne? És nyugottan.";

const splashText=[
    'Nyugodtan. Nyugodtan. Mért ne? És nyugodtan.',
    'Nincs süti a sötétoldalon, néztem.',
    'MIT?',
    'Szeretem a bundás kenyeret',
    'MY LIFE FOR SUPER EARTH!!!'
    
]

//console.log(splashText.length)

var rndNum= Math.floor(Math.random() * splashText.length);
document.getElementById('splash').innerHTML=splashText[rndNum];
const date = new Date();
let currMonth= date.getMonth()+1;
let currDay=date.getDate();
//console.log(currDay,currMonth)
if (currMonth==1&&currDay==4) {
document.getElementById('splash').innerHTML='Boldogat nekem';
    
}
