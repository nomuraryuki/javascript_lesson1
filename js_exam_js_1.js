'use strict';

const  add = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

const  average = (num1, num2, num3) => {
    return add(num1, num2, num3)/3;
}
const jpn=document.getElementById('japanese_score');
const math=document.getElementById('math_score');
const english=document.getElementById('english_score');
let sum_text=document.getElementById('sum');
let ave_text=document.getElementById('average');

document.getElementById('caluclation').addEventListener('click', () => {

    let sum =add(Number(jpn.value),Number(math.value),Number(english.value));
    sum_text.textContent = sum;
    
    let ave = average(Number(jpn.value),Number(math.value),Number(english.value)); 
    ave_text.textContent = ave;
  });

  document.getElementById('clear').addEventListener('click', () => {
    jpn.value=0;
    math.value=0;
    english.value=0;
    sum_text.textContent="";
    ave_text.textContent="";

  });



