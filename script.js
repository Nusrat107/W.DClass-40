document.getElementById('paragraph').innerHTML = "Show the text on browser!"; //<h1></h1>


let number1 = 49;
let number2 = 51;

let result = number1+number2;

document.getElementById('lekha').innerHTML = "solve a sum";
document.getElementById('lekha1').innerHTML = "49+51";

document.getElementById('result').innerHTML = result;


//Calculation...

function sum ()
{
    let digit1 = document.getElementById('number1').value; //"5"
    let digit2 = document.getElementById('number2').value; //"5"


    let converted1 = parseFloat(digit1); //5
    let converted2 = parseFloat(digit2); //5

    let sum = converted1+converted2;

    document.getElementById('sum').innerHTML = "The result is="+sum;
}