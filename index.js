const resultElement=document.getElementById('result')
const input1 =document.getElementById('input1')
const input2 =document.getElementById('input2')
const submitBtn =document.getElementById('submit')
const plusBtn =document.getElementById('plus')
const minusBtn =document.getElementById('minus')
const divideBtn =document.getElementById('divide')
const multipleBtn =document.getElementById('multiple')
let action='+'
console.log(action)

plusBtn.onclick = function(){
  action = '+'
}

minusBtn.onclick = function(){
  action = '-'
}
divideBtn.onclick = function(){
  action = '/'
  }
multipleBtn.onclick = function(){
  action = '*'
  }

function printResult(res){
if (res < 0){
  resultElement.style.color='red'
}else{
  resultElement.style.color='green'
}
resultElement.textContent=res
}

function calcWithActions(inp1,inp2,actionSumbol){
const num1=Number(inp1.value)
const num2=Number(inp2.value)
switch (actionSumbol){
  case '+':
    return num1+num2;
  case '-':
    return num1-num2
  case '/':
    return num1/num2
  case '*':
    return num1*num2
}
}

submitBtn.onclick = function(){
 const result=calcWithActions(input1,input2,action)
    printResult(result)
}
