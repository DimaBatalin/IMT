
const btn = document.getElementById("btn_elem");
btn.addEventListener("click", function () {
    console.log(output_elem.value)
    let h = (+height_elem.value) / 100
    let w = +weight_elem.value
    let imt = w / (h * h)
    output_elem.value = imt.toFixed(2)
})

const height_elem = document.getElementById("height");
const weight_elem = document.getElementById("weight");
const output_elem = document.getElementById("output");
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(res => console.log('SW registred', res))
        .catch(error => {
            console.log('SW failed', error)
        })
}