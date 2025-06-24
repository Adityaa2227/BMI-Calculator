let height=document.querySelector('#height');
let weight=document.querySelector('#weight');
let form=document.querySelector('form');
let res=document.querySelector('#results');

form.addEventListener('submit',(e)=>{
e.preventDefault();
if(height.value === '' || height.value < 0 || isNaN(height.value)) res.innerHTML= `please enter correct height value`;
else if(weight.value === '' || weight.value < 0 || isNaN(weight.value)) res.innerHTML= `please enter correct weight value`;
else{
let bmi=(weight.value)/((height.value/100)**2);
res.innerHTML= `<span>your bmi is ${bmi.toFixed(2)}</span>`;
}

})
