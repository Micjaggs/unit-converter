const cnvrtInput = document.getElementById("cnvrt-num")
const cnvrtBtn = document.getElementById("cnvrt-btn")
let unitMeter = document.getElementById("cnvrtunit-meter")
let unitLitre = document.getElementById("cnvrtunit-litre")
let unitKilo = document.getElementById("cnvrtunit-kilo")
let unitEl = document.getElementsByClassName("cnvrt-unit")

//Test

cnvrtBtn.addEventListener("click", function() {
    // add condition for if value is not number = if else etc
    for (let i = 0; i < unitEl.length; i ++) {
       metersFeet()
       litreGallons()
       kiloPounds()
    }
})


function metersFeet() {
    let equation = Math.round((cnvrtInput.value * 3.28084) * 10) / 10 
    let equation2 = Math.round((cnvrtInput.value / 3.28084) * 10) /10
    unitMeter.innerText = `${cnvrtInput.value}  meters = ${equation} feet | ${cnvrtInput.value} feet = ${Math.round(equation2 * 10)/10} meters`
}

function litreGallons() {
    let equation = Math.round((cnvrtInput.value * 0.26417) * 10) / 10 
    let equation2 = Math.round((cnvrtInput.value / 0.264172) * 10) / 10
    unitLitre.innerText = `${cnvrtInput.value}  litres = ${equation} gallons | ${cnvrtInput.value} gallons = ${equation2} litres`
}

function kiloPounds() {
    let equation = Math.round((cnvrtInput.value * 2.2) * 10) / 10
    let equation2 = Math.round((cnvrtInput.value / 2.2) * 10) / 10
    unitKilo.innerText = `${cnvrtInput.value}  kilograms = ${equation} pounds | ${cnvrtInput.value} pounds = ${equation2} kilograms`
}
 

