const left1 = document.getElementById('left1');
const left2 = document.getElementById('left2');
const left3 = document.getElementById('left3');
const left4 = document.getElementById('left4');
const left5 = document.getElementById('left5');
const left6 = document.getElementById('left6');
const left7 = document.getElementById('left7');

const right1 = document.getElementById('right1');
const right2 = document.getElementById('right2');
const right3 = document.getElementById('right3');
const right4 = document.getElementById('right4');
const right5 = document.getElementById('right5');
const right6 = document.getElementById('right6');
const right7 = document.getElementById('right7');

const exitBtn = document.getElementById('exitQuote');


left1.addEventListener('click',function(){
    right1.style.display='block';
})

left2.addEventListener('click',function(){
    right2.style.display='block';
})

left3.addEventListener('click',function(){
    right3.style.display='block';
})

left4.addEventListener('click',function(){
    right4.style.display='block';
})

left5.addEventListener('click',function(){
    right5.style.display='block';
})

left6.addEventListener('click',function(){
    right6.style.display='block';
})

left7.addEventListener('click',function(){
    right7.style.display='block';
    exitBtn.style.display='block';
})

