const express= require('express')
const app=express()
const port=3000


var a=0
var b=0
app.get('/', (req,res)=>{
    res.send(`
        <p>A csapat pontjai ${a}</p>
        <p>B csapat pontjai ${b}</p>
        <a href="/incA">A+</a>
        <a href="/decA">A-</a>
        <a href="/incB">B+</a>
        <a href="/decB">B-</a>
        `)
})

app.get('/incA', (req,res)=>{
    a++
    res.send(`
        <p>A csapat pontjai ${a}</p>
        <p>B csapat pontjai ${b}</p>
        <a href="/incA">A+</a>
        <a href="/decA">A-</a>
        <a href="/incB">B+</a>
        <a href="/decB">B-</a>
        `)
})

app.get('/decA', (req,res)=>{
    a--
    res.send(`
        <p>A csapat pontjai ${a}</p>
        <p>B csapat pontjai ${b}</p>
        <a href="/incA">A+</a>
        <a href="/decA">A-</a>
        <a href="/incB">B+</a>
        <a href="/decB">B-</a>
        `)
})

app.get('/incB', (req,res)=>{
    b++
    res.send(`
        <p>A csapat pontjai ${a}</p>
        <p>B csapat pontjai ${b}</p>
        <a href="/incA">A+</a>
        <a href="/decA">A-</a>
        <a href="/incB">B+</a>
        <a href="/decB">B-</a>
        `)
})

app.get('/decB', (req,res)=>{
    b--
    res.send(`
        <p>A csapat pontjai ${a}</p>
        <p>B csapat pontjai ${b}</p>
        <a href="/incA">A+</a>
        <a href="/decA">A-</a>
        <a href="/incB">B+</a>
        <a href="/decB">B-</a>
        `)
})







app.get('/cica', (req,res)=>{
    res.send(`<a href="/cica">cica</a> a változónk ${a}`)


}
)
app.listen(3000)