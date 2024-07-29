/* Custom js file made by JeanDoe */

//function to keep and fetch touchs elem

let preview = document.querySelector('.calculator .preview');
let touchs = document.querySelectorAll('.btn.number')
let operators = document.querySelectorAll('.btn.operator')
let optionBtns = document.querySelectorAll('.btn.option')

function initializePreview(i){
    preview.innerText = i
}

function number() {
    touchs.forEach(item => {
        item.addEventListener('click', () => {
            let lastPreview = preview.innerText
            if(lastPreview.length === 1 && lastPreview === '0'){
                initializePreview(item.value)
            }else{
                preview.innerText += item.value
            }
        })
    });
}

function operator() {
    operators.forEach(item => {
        item.addEventListener('click', () => {
            preview.innerText += item.value
        })
    });
}

function options() {
    optionBtns.forEach(item => {
        item.addEventListener('click', () => {
            let lastPreview = preview.innerHTML
            if(item.value === 'c'){
                initializePreview(0)
            }
            if(item.value === 'ac' && preview.innerHTML !== '0'){
                preview.innerText = lastPreview.slice(0, lastPreview.length -1)
                if(preview.innerText.length === 0){
                    initializePreview(0)
                }
            }
            if(item.value === '='){
                preview.innerHTML = calcul(lastPreview)
            }
        })
    });
}

function calcul(express){
    let total = 0
    total = eval(express)
    return total
}


operator()
number()
options()