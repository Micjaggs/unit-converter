const cnvrtInput = document.getElementById("cnvrt-num")
const cnvrtBtn = document.getElementById("cnvrt-btn")
let unitMeter = document.getElementById("cnvrtunit-meter")
let unitLitre = document.getElementById("cnvrtunit-litre")
let unitKilo = document.getElementById("cnvrtunit-kilo")
let unitEl = document.getElementsByClassName("cnvrt-unit")



cnvrtBtn.addEventListener("click", function() {
    for (let i = 0; i < unitEl.length; i ++) {
       metersFeet()
       litreGallons()
       kiloPounds()
    }
})


function metersFeet() {
    let equation = cnvrtInput.value * 3.28084
    let equation2 = cnvrtInput.value / 3.28084
    unitMeter.innerText = `${cnvrtInput.value}  meters = ${Math.round(equation)} feet | ${cnvrtInput.value} feet = ${equation2} meters`
}

function litreGallons() {
    let equation = cnvrtInput.value * 0.264172
    let equation2 = cnvrtInput.value / 0.264172
    unitLitre.innerText = `${cnvrtInput.value}  litres = ${equation} gallons | ${cnvrtInput.value} gallons = ${equation2} litres`
}

function kiloPounds() {
    let equation = cnvrtInput.value * 2.2
    let equation2 = cnvrtInput.value / 2.2
    unitKilo.innerText = `${cnvrtInput.value}  kilograms = ${equation} pounds | ${cnvrtInput.value} pounds = ${equation2} kilograms`
}
 

// cnvrtBtn.addEventListener("click", metersFeet, litreGallons, kiloPounds)





//multiply the given meter value by 3.28084 feet
//gallons = 0.264172 × liters
