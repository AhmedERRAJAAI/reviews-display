const profiles=[
    {
        id:1,
        name:'Aryali',
        img:'imgs/5.jpg',
    },
    {
        id:2,
        name:'Susana',
        img:'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',
    },
    {
        id:3,
        name:'Petrochka',
        img:'imgs/1.jpg',
    },
    {
        id:4,
        name:'pitchka',
        img:'imgs/4.jpg',
    },
    {
        id:5,
        name:'Puerta',
        img:'imgs/3.jpg',
    },
]

const img = document.getElementById('pic');
const perName = document.getElementById('name');
const left = document.getElementById('left');
const right = document.getElementById('right');
const shuffle = document.getElementById('random');
const goAuto = document.getElementById('auto');
let currentItem = 0;
let old = 0;

window.addEventListener('DOMContentLoaded',move())

function move(){
    let item = profiles[currentItem];
    img.src = item.img;
    perName.textContent = item.name;
}

left.addEventListener('click',()=>{
    currentItem++;
    if(currentItem < 0){
        currentItem = profiles.length-1;
    }
    if(currentItem > profiles.length-1){
        currentItem = 0;
    }
    move();
})
right.addEventListener('click',()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = profiles.length-1;
    }
    if(currentItem > profiles.length-1){
        currentItem = 0;
    }
    move();
})
// function to get random number 
function mkRand(){
    let tempItem = currentItem;
    currentItem = Math.floor(Math.random()*4);
    while(currentItem === tempItem){
        currentItem = Math.floor(Math.random()*4);
    }
}
// get a profile randomly
shuffle.addEventListener('click',()=>{
    mkRand();
    move();
})

// show all profiles sequentially
goAuto.addEventListener('click',()=>{
    setInterval(function(){
        mkRand();
        move();
    },1000);
})
