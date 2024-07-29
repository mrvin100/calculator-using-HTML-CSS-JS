/* Custom js file made by JeanDoe */

//function to keep and fetch touchs elem

let preview = document.querySelector('.calculator .preview');
let touchs = document.querySelectorAll('.btn.number')
let operators = document.querySelectorAll('.btn.operator')
let optionBtns = document.querySelectorAll('.btn.option')

function initializePreview(){
    preview.innerText = 0
}

function number() {
    touchs.forEach(item => {
        item.addEventListener('click', () => {
            preview.innerText += item.value
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
                initializePreview()
            }
            if(item.value === 'ac' && preview.innerHTML !== '0'){
                preview.innerText = lastPreview.slice(0, lastPreview.length -1)
                if(preview.innerText.length === 0){
                    initializePreview()
                }
            }
            if(item.value === '='){
                preview.innerHTML = calcul(lastPreview)
            }
        })
    });
}

function calcul(s){
    let total = 0
    if(s.includes('*')){
        total = s.split('*').reduce((product, number) => product * number, 1)
    }else if(s.includes('/')){
        const arr = s.split('/')
        let divider = parseFloat(arr[0])
        for(let i = 1; i < arr.length; i++ ){
            divider /= arr[i]
        }
        total = divider
        console.log(total)
    }else{
        total = sum(s)
    }
    
    return total

    function sum(express){
        let sum = 0
        express = express.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || []

        while(express.length){
            sum += parseFloat(express.shift())
        }
        return sum
    }
}


operator()
number()
options()
