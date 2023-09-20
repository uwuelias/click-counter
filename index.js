const incrementButton = document.getElementById('increase');
const decrementButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const count = document.getElementById('count');
let counter = 0;

incrementButton.addEventListener('click', function(e) {
    counter++;
    count.innerHTML = counter;
})

decrementButton.addEventListener('click', function(e) {
    counter--;
    count.innerHTML = counter;
})

resetButton.addEventListener('click', function(e) {
    counter = 0;
    count.innerHTML = counter;
})