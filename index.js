const incrementButton = document.getElementsByID('increase');
const decrementButton = document.getElementsByID('decrease');
const counterValue = document.getElementsByID('count').value;

incrementButton.addEventListener('click', function(e) {
    counterValue++;
    document.getElementsByClassName('counter').textContent = counterValue;  
    console.log(counterValue);
});

decrementButton.addEventListener('click', function(e) {
    counterValue--;
    document.getElementsByClassName('counter').textContent = counterValue;  
});