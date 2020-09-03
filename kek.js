let day = document.getElementById ("days")
let hours = document.getElementById ("hours")
let minutes = document.getElementById ("minutes")
let seconds = document.getElementById ("seconds")
let end = "2020-11-25"
let end1 = Date.parse (end)
let powtor = setInterval (start,1000)
function start (){
let today = new Date
let today1 = Date.parse (today)
let raznica = end1 - today1 
day.innerHTML =Math.floor (raznica /1000 /60 /60 /24)
hours.innerHTML =Math.floor (raznica /1000 /60 /60 %24)
minutes.innerHTML =Math.floor (raznica /1000 /60 %60)
seconds.innerHTML =Math.floor (raznica /1000 %60)
}