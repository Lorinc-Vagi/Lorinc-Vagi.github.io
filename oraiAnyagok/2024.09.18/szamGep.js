function osszead() {
    szam1=Number( document.getElementById("szam1").value)
    szam2=Number (document.getElementById("szam2").value)

    ki=szam1+szam2

    document.getElementById("res").innerHTML=ki
}
function kivon() {
    szam1=Number( document.getElementById("szam1").value)
    szam2=Number (document.getElementById("szam2").value)

    ki=szam1-szam2

    document.getElementById("res").innerHTML=ki
}
function szoroz() {
    szam1=Number( document.getElementById("szam1").value)
    szam2=Number (document.getElementById("szam2").value)

    ki=szam1*szam2

    document.getElementById("res").innerHTML=ki
}
function oszt() {
    szam1=Number( document.getElementById("szam1").value)
    szam2=Number (document.getElementById("szam2").value)

    ki=szam1/szam2
    if (szam2==0) {
        let audio= document.getElementById("boom")
        
        document.getElementById("res").innerHTML="HIBA"
        
        setTimeout(() => {
            document.getElementById("res").innerHTML="HIBA HIBA"
            document.body.style.backgroundColor = "yellow";

            
        }, 1000);
        setTimeout(() => {
            document.getElementById("res").innerHTML="💥💥💥💥💥"
            document.body.style.backgroundColor = "red";

            audio.play();
        }, 3000);
        setTimeout(() => {
            document.body.style.backgroundColor = "#7de085";
            document.getElementById("res").innerHTML="nullával nem lehet osztani"

        }, 6000);


        // audio.Delay(2)
        // window.open("https://www.youtube.com/watch?v=jEexefuB62c");
        // window.open("https://www.youtube.com/watch?v=jEexefuB62c");
        // window.open("https://www.youtube.com/watch?v=jEexefuB62c");
        // window.open("https://www.youtube.com/watch?v=jEexefuB62c");
        // window.open("https://www.youtube.com/watch?v=jEexefuB62c");
        // window.open("https://www.youtube.com/watch?v=jEexefuB62c");
        // window.open("https://www.youtube.com/watch?v=jEexefuB62c");

        // window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        // window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        // window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        // window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");


    }
    else
    {

        document.getElementById("res").innerHTML=ki
    }


}

