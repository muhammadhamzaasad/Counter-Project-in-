let count = document.querySelector('.count');
let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');
let change = document.querySelector('.change');

decrease.addEventListener('click', () => {
    countValue = parseInt(count.innerText)
    changeValue = parseInt(change.value)
    count.innerText = countValue - changeValue;
})

increase.addEventListener('click' , () => {
    countValue = parseInt(count.innerText)
    changeValue = parseInt(change.value)
    count.innerText = countValue + changeValue;
})

reset.addEventListener('click' , () => {
    count.innerText = 0;
})

