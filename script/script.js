const userInput = document.getElementById("userInput");
var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    if (!isNaN(parseFloat(userInput.value)) && isFinite(userInput.value)) {
        
    } else if (userInput.value == 0) {
    } else {
        userInput.value = eval(expression);
        expression = eval(expression);
    }  
}
function erase(){
    expression=''
    userInput.value = expression
}