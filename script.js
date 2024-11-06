const cnvrtInput = document.getElementById("cnvrt-num")
const cnvrtBtn = document.getElementById("cnvrt-btn")
let unitEl = document.getElementsByClassName("cnvrtunit")

console.log(unitEl)

cnvrtBtn.addEventListener("click", function() {
    for (let i = 0; i < 4; i ++) {
        unitEl[i].innerText = cnvrtInput.value
    }
})


