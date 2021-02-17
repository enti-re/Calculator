const container = document.querySelector("#buttonContainer");
const gridItem = document.querySelectorAll(".btn");
const gridArray = [...gridItem];
let equation="";

gridArray.forEach((button)=>{
    button.addEventListener("click",function(){
        if(button.textContent == "AC")
            equation="";
        else if(button.textContent=="C")
            equation = equation.substring(0,equation.length-1);
        else if(button.textContent=="=")
        {
            let result = Calculation(equation)
            equation=result;
        }
        else
            equation+=button.textContent;
    })
})

// function Calculation(exp)
// {
//     if(exp=="")
//         return "ERROR";    
    
//     for(let i=0;i<exp.length;i++)
//     {
//         if(exp[i]=='/')
//         {
//             if(isValid(exp,i))
//                 exp=divide(exp,i);
//             else
//                 return "ERROR";
//         }
//     }

//     for(let i=0;i<exp.length;i++)
//     {
//         if(exp[i]=='*')
//         {
//             if(isValid(exp,i))
//                 exp=multiply(exp,i);
//             else
//                 return "ERROR";
//         }
//     }

//     for(let i=0;i<exp.length;i++)
//     {
//         if(exp[i]=='%')
//         {
//             if(isValid(exp,i))
//                 exp=modulus(exp,i);
//             else
//                 return "ERROR";
//         }
//     }

//     for(let i=0;i<exp.length;i++)
//     {
//         if(exp[i]=='+')
//         {
//             if(isValid(exp,i))
//                 exp=add(exp,i);
//             else
//                 return "ERROR";
//         }
//     }

//     for(let i=0;i<exp.length;i++)
//     {
//         if(exp[i]=='-')
//         {
//             if(isValid(exp,i))
//                 exp=sub(exp,i);
//             else
//                 return "ERROR";
//         }
//     }

//     return exp;
// }

// function isValid(exp,index)
// {
//     let arr = ['+','-','/','%','*'];
//     if(index<0 || index>exp.length || !arr.includes(exp[index-1]) || !arr.includes(exp[index+1]))
//         return false;
//     return true;
// }

// function add(exp,index)
// {
//     let sum = exp[index-1]+exp[index+1];
//     ex    
// }
// const subtract = (x,y) => abs(x-y);
// const multiply = (x,y) => (x*y);
// const divide = (x,y) => x/y;

// function operate(operand,operator1,operator2)
// {
//     if(operand=='+')
//         add(operator1,operator2);
//     else if(operand=='-')
//         subtract(operator1,operator2);
//     else if(operand=='*')
//         multiply(operator1,operator2);
//     else if(operand=='/')
//         divide(operator1,operator2);
// }

