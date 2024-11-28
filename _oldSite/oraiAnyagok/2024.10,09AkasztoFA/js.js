console.log("js.js Innit")
let viktory=false
let gameOver=false
let score=0
let _sc=[];
let kitalaltBetuk=[];
let hp=0 //ha ez 10 akkor vége a játéknak
console.log(hp)
document.getElementById("kep").src =`./Assets/hang/${hp}.png`;
// document.getElementById('kep').src ="./Assets/hang/1.png";

const szavak =[
    'szék',
    'asztal',
    'gép',
    'fa',
    'ablak',
    'könyv',
    'telefon',
    'kulcs',
    'autó',
    'toll',
    'papír',
    'füzet',
    'szék',
    'asztal',
    'ceruza',
    'óra',
    'fal',
    'lámpa',
    'víz',
    'bögre',
    'fülhallgató'
    ]

let RndKivalSzoID = Math.floor(Math.random() * szavak.length); //Szó kiválasztása
let KivalSzo=szavak[RndKivalSzoID] //kiválasztott szó
let szoSzam=szavak[RndKivalSzoID].length //kiválasztott szó hossza

console.log(RndKivalSzoID,'   ',szoSzam,'  ', KivalSzo)


//aláhózások létrehozása a szóhoz.
for (let i = 0; i < szoSzam; i++) {
    _sc.push("_")
    
}
document.getElementById("szo_").innerText = _sc

function guess() {
    console.log("funcStart")
    let guessEdChar=document.getElementById('betu').value
    console.log('Guessed Char: '+guessEdChar)
    // let char=document.getElementById("betu").innerText
    let Correct=false
    for (let i = 0; i < szoSzam; i++) {
        console.log(KivalSzo[i])
        if (KivalSzo[i]==guessEdChar) {
            console.log("Kitalalta!")
            Correct=true
            score++

        }
    }


    //Aláhuzások változtatása
    if (Correct) {
        for (let i = 0; i < szoSzam; i++) {
            if (guessEdChar==KivalSzo[i]) {
                _sc[i]=guessEdChar
            }
        }
    }
    document.getElementById("szo_").innerText =_sc

    if (szoSzam==kitalaltBetuk.length) {
        viktory=true
    }
    if (Correct && !viktory) {
        let vanEIlyenBetüKitalálvaMár=false
        for (let i = 0; i < szoSzam; i++) {
            if (kitalaltBetuk[i]!=null) {
                if (guessEdChar==kitalaltBetuk[i]) {
                    vanEIlyenBetüKitalálvaMár=true
                }                
            }
        }
        if (!vanEIlyenBetüKitalálvaMár) {
            kitalaltBetuk.push(guessEdChar)
            if (szoSzam==score) {
                viktory=true
            }
        
        }

    }
    else if (!Correct && !viktory){
        if (hp<10) {
            hp++
            document.getElementById("kep").src =`./Assets/hang/${hp}.png`;
            if (hp==10) {
                gameOver=true
            }
        }
    }
    if (viktory && !gameOver){
        document.getElementById("kep").src =`./Assets/hang/viktory.png`;
    }
    if (gameOver) {
        document.getElementById("szo_").innerText =`A szó "${KivalSzo}" volt`

    }




    console.log('Kitalalt betük :'+ kitalaltBetuk)

    console.log('HP = '+hp)
    document.getElementById('betu').value='';
    console.log("_sc="+_sc)
    console.log("FuncEnd")

}
document.getElementById('guessBtn').addEventListener('click', guess);