const container = document.querySelector("#buttonContainer");
const gridItem = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const gridArray = [...gridItem];
let equation="";
let checkOperator = false;
let firstOperand;
window.addEventListener("keydown",enterInput);

console.log(display.textContent);
function includeNumber(num)
{
    if(checkOperator) evaluate();
    display.textContent+=num;   
    console.log(display.textContent);
}

function includeOperator(operator)
{
    firstOperand=display;
    display.textContent="";
    display.textContent+=operator;
    console.log(display.textContent);
    checkOperator=true;
}



function evaluate()
{

}

function enterInput(e)
{
    if(e.key>=0 && e.key<=9) includeNumber(e.key);
    if(e.key==".") console.log("Dot is pressed");
    if(e.key=="Backspace") console.log("Backspace is pressed");  
    if(e.key=="=") console.log("= is pressed");
    if(e.key=="+" || e.key=="-" || e.key=="%" || e.key=="/" || e.key=="*") includeOperator(e.key);
    if(e.key=="Escape") console.log("Escape is pressed");     
}


// gridArray.forEach((button)=>{
//     button.addEventListener("click",function(){
//         if(button.textContent == "AC")
//             equation="";
//         else if(button.textContent=="C")
//             equation = equation.substring(0,equation.length-1);
//         else if(button.textContent=="=")
//         {
//             let result = Calculation(equation)
//             equation=result;
//         }
//         else
//             equation+=button.textContent;
//     })
// })


