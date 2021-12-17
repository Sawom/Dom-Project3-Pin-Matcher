// get pin 
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4 ){
        return pin;
    }else{
        return getPin();
    }
}
function pinGenerate(){
    const gpin = getPin();
    document.getElementById('pinDisplay').value = gpin;
}
// input pin
document.getElementById('keyPad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('btnNumbers');
    if (isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = number + previousNumber;
        calcInput.value = newNumber;
    }
})
// verify pin
function verifyPin(){
    // get pin 
    const pin = document.getElementById('pinDisplay');
    const pin1 = pin.value;
    // get typed pin 
    const typedPin = document.getElementById('btnNumbers');
    const typedPin1 = typedPin.value
    // success Message 
    const success = document.getElementById('successMessage');
    //error  message
    const error = document.getElementById('errorMessage');

    if(pin1 == typedPin1){
        success.style.display = 'block';
        error.style.display = 'none';
    }
    else{
        success.style.display = 'none';
        error.style.display = 'block';
    }
}