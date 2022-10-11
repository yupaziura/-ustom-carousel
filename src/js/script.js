import {arrWood, arrFabric} from "../db/database.js";

const blockImg = document.querySelector('#main_img');

const btnPrev = document.getElementById('btn_prev');
const btnNext = document.getElementById('btn_next');

const btnUp = document.getElementById('btn_up');
const btnDown = document.getElementById('btn_down');

let horizon = 0;
let vert = 0;

let fileName = `./img/armchair-${arrWood[horizon]}-${arrFabric[vert]}.png`;



const clickBtnHorizon = (type, arrLength) => {
    if (type === 'back') {
        horizon === 0 ? horizon = arrLength-1 - 1 : horizon = horizon - 1;
    }
    else {
        horizon === arrLength-1 ? horizon = 0 : horizon = horizon + 1;
    }
    blockImg.src = fileName;
    fileName = `./img/armchair-${arrWood[horizon]}-${arrFabric[vert]}.png`;
    console.log(horizon, fileName);


}

const clickBtnVertical = (type, arrLength) => {
    if (type === 'back') {
        vert === 0 ? vert = arrLength-1 - 1 : vert = vert - 1;
    }
    else {
        vert === arrLength-1 ? vert = 0 : vert = vert + 1;
    }
    blockImg.src = fileName;
    fileName = `./img/armchair-${arrWood[horizon]}-${arrFabric[vert]}.png`;
    console.log(vert);


}

btnPrev.addEventListener('click', ()=> {clickBtnHorizon( 'back', arrWood.length)});
btnNext.addEventListener('click', ()=> {clickBtnHorizon( 'next', arrWood.length)});

btnUp.addEventListener('click', ()=> {clickBtnVertical( 'next',  arrFabric.length)});
btnDown.addEventListener('click', ()=> {clickBtnVertical( 'back',  arrFabric.length)});





