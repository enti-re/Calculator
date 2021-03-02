const container = document.querySelector("#buttonContainer");
const gridItem = document.querySelectorAll(".btn");
const display = document.querySelector(".Screen ");
const gridArray = [...gridItem];
const number = document.querySelectorAll(".number")
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const back = document.querySelector(".backspace");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
let equation="";
let firstOperand;
let secondOperand;
let isSecondOperandNot = false;
let currentOperator=null;

window.addEventListener("keydown",enterInput);
number.forEach(num => {
    num.addEventListener("click",()=>{
        console.log(num.textContent);
        includeNumber(num.textContent)
    });
}
);

operator.forEach(sign=>{
    sign.addEventListener("click",()=>{
        console.log(sign.textContent);
        includeOperator(sign.textContent);
    })
})

dot.addEventListener("click",()=>{
    includeDot();
})

equal.addEventListener("click",()=>{
    evaluate();
})

clear.addEventListener("click",()=>{
    resetDisplay();
})

back.addEventListener("click",()=>{
    backspace();
})





function resetDisplay()
{
    display.textContent="";
    isSecondOperandNot=false;
}

function includeNumber(num)
{
    if(isSecondOperandNot) resetDisplay();                     
    display.textContent+=num;
}

function includeOperator(operator)
{
    if(display.textContent=="") return;
    if(currentOperator!=null)
    {
        if(isSecondOperandNot) return;                 // 2++ for this case, want first operator to be considered
        evaluate();
    } 
    firstOperand=display.textContent;
    currentOperator=operator;
    isSecondOperandNot=true;
}

function evaluate()
{
    if(!currentOperator || display.textContent=="") return;
    if(isSecondOperandNot)                               // To avoid this (2+2+ => 4+ => "press Enter" -> display=4 => 4+4=8)
        return; 
    secondOperand=display.textContent;
    display.textContent=operate();
    currentOperator=null;
}

function backspace()
{
    if(display.textContent=="") return;
    let len = display.textContent.length;
    display.textContent = display.textContent.substring(0,len-1);
}

function includeDot()
{
    if(display.textContent.includes(".")) return;
    display.textContent+=".";
}


function enterInput(e)
{
    if(e.key>=0 && e.key<=9) includeNumber(e.key);
    if(e.key==".") includeDot();
    if(e.key=="Backspace") backspace();  
    if(e.key=="=" || e.key=="Enter") evaluate();
    if(e.key=="+" || e.key=="-" || e.key=="%" || e.key=="/" || e.key=="*") includeOperator(e.key);
    if(e.key=="Escape") resetDisplay();     
}

function operate()
{
    if(currentOperator==null) return null;
    if(secondOperand==0 && (currentOperator=="/" || currentOperator=="%"))
    {
        alert("Can't divide a number by zero");
        resetDisplay();
        return;
    } 
    if(currentOperator=="+") return add(firstOperand,secondOperand);
    if(currentOperator=="-") return subtract(firstOperand,secondOperand);
    if(currentOperator=="*") return multiply(firstOperand,secondOperand);
    if(currentOperator=="/") return divide(firstOperand,secondOperand);
    if(currentOperator=="%") return modulas(firstOperand,secondOperand);
    
}

const add = (operand1,operand2) => (+operand1)+(+operand2); 
const subtract = (operand1,operand2) => (+operand1)-(+operand2); 
const multiply = (operand1,operand2) => (+operand1)*(+operand2); 
const divide = (operand1,operand2) => (+operand1)/(+operand2); 
const modulas = (operand1,operand2) => (+operand1)%(+operand2); 




