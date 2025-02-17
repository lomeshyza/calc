

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
  submitBtn.className='btn btn-block btn-outline-success'
  action = '+'
}

minusBtn.onclick = function(){
  submitBtn.className='btn btn-block btn-outline-danger'
  action = '-'
}
divideBtn.onclick = function(){
  submitBtn.className='btn btn-block btn-outline-warning'
  action = '/'
  }
multipleBtn.onclick = function(){
  submitBtn.className='btn btn-block btn-outline-info'
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
