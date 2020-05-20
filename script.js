function operate(a,b,c){
    if(b=="+"){
        return (+a)+(+c);
    } else if(b=="-"){
        return a-c;
    } else if(b=="/"){
        return a/c;
    } else if(b=="*"){
        return a*c;
    } else return "check your function";
}

function add(a,b){
return a+b;    
}
function subtract(a,b){
    return a-b;
}function multiply(a,b){
    return a*b;
}function divide(a,b){
    return a/b;
}
let values="";
let display="";
const buttons=document.querySelectorAll(".numbers");
for(let i=0; i<buttons.length; i++){
buttons[i].addEventListener("click", ()=>{
   values+=buttons[i].value;
   display+=buttons[i].value;
   document.querySelector("#gosterge").setAttribute("value", display);
});
}
const operators=document.querySelectorAll(".operators");
for(let i=0; i<operators.length; i++){
operators[i].addEventListener("click", ()=>{
    values+=" "+operators[i].value+" ";
    display+=operators[i].value;
    document.querySelector("#gosterge").setAttribute("value", display);
});    
}
let result=0;
const func=document.querySelector(".equal");
func.addEventListener("click", ()=>{
    operands=values.split(" ");
    if(+operands[0]==NaN){
        operands.unshift("0");
    }
    result=operate(operands[0], operands[1], operands[2]);
    for(let i=3; i<operands.length; i+=2){
      
        result=operate(result, operands[i], operands[i+1]);
        document.querySelector("#gosterge").setAttribute("value", result);
    }
    document.querySelector("#gosterge").setAttribute("value", result);
    values="";
    display="";
    return result;
});
const clear=document.querySelector(".clear-button");
clear.addEventListener("click", ()=>{
    display="";
    values="";
    result=0;
    document.querySelector("#gosterge").setAttribute("value", "0");
})  
