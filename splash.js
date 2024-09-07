//console.log("splash.js started");
let splashElement = document.getElementById('splash')

//console.log(splashElement)
//document.getElementById('splash').innerHTML="Nyugottan. Nyugottan. Mért ne? És nyugottan.";

const splashText=[
    'Nyugodtan. Nyugodtan. Mért ne? És nyugodtan.',
    'Nincs süti a sötétoldalon, néztem.',
    'MIT?',
    'Szeretem a bundás kenyeret',
    'MY LIFE FOR SUPER EARTH!!!',
    'Hello there!',
    'General Kenobi!',
    'Follow the damn train CJ!',
    'Sütimentes',
    'Az élet értelme 42',
    'Another settlement needs our help',
    'JA MAN!!!',
    'DASTINGO!!!',
    'I want to be your sledgehammer',
    'https://www.youtube.com/watch?v=OJWJE0x7T4Q',
    'NININININI',
    'Dis iz ö begining OF butiful fendship',
    //'HONNAN VAN TÖKÖTÖK?',
    //'„Látott valamit? Nem, uram! Nem láttam, hogy megint a babáival játszik.”',
    '„A gonosz mindig győzni fog, mert a jó buta.”',
    'Lorem ipsum dolor sit amet!',
    'Laudetur Iesus Christus!',
    'YELLOW CAAARRR!',
    //'TAHITI',
    'I have a plan',
    //'🔫😎',
    'We can`t expect God to do all the work'

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
if (currMonth==9&&currDay==1) {
    document.getElementById('splash').innerHTML='😭';

}
