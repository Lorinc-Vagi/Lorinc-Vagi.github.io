var bl=[]

function f(e) {
    bl.push(e.value)
    bl.sort()
    e.value=''
    document.querySelector('#output').innerHTML= 
    bl.map((elem,i)=>
        `<div class="x${i%2}">${elem}</div>
        `).join('')
}
function Összead() {
    a =parseInt(document.getElementById('elsoSzam').value) 
    b=parseInt(document.getElementById('masodikSzam').value) 

    //c=5+4
    console.log(a)
    console.log(b)
    c=a+b
    console.log(c)
    if (b==NaN || a==NaN) {
        document.querySelector('#szamOut').innerHTML ="Nem szám"
    } else {
        document.querySelector('#szamOut').innerHTML =c
    }
    
}