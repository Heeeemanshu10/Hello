const myHeading  = document.querySelector('h1');
myHeading.textContent = "About Javascript";

const myHeading2 = document.querySelector('h2');
myHeading2.textContent = "Javascript Basics ";

const myPara = document.querySelector('p');
myPara.textContent = "Scripting language that can be used both to create frontend as well the backend API's";

document.write('Printing two variables in the console,check it out')
var x = 5;           //Printing the two variables in the console
var b = 10;
console.log(x,b)

var arr = [1,2,3,4,5];  //to typecast the indexed array
console.log(typeof(parseInt(arr[3]))); 

//Introducing the Math function
function math_random(){
    var a = Math.random();
    var power = Math.pow(a,2);
    var squareRoot = Math.sqrt(a);
    var ab_solute = Math.abs(a);
    var ceil = Math.ceil(a);
    var floor = Math.floor(a);
    var round = Math.round(a);
    console.log(a);
    console.log(power);
    console.log(squareRoot);
    console.log(ab_solute);
    console.log(ceil);
    console.log(floor);
    console.log(round);
}
