const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(e){
        display.value = "Error";
        console.log(e);
    }
}

function clearDisplay(){
    display.value = "";
}