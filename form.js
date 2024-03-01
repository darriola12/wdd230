const password1 = document.querySelector("#password"); 
const password2 = document.querySelector("#ConfirmPass"); 
const message = document.querySelector("#message");


password2.addEventListener("focusout", checkSame); 

function checkSame()
{
    if(password1.value !== password2.value)
    {
        message.textContent = "Passowrd do not match"
        password2.value =""
        password2.focus();
    }
    else 
    {
        message.style.display ="none"
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
