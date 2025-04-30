let turn = -1;    //Khoi tao ban dau chua co luot 
const turnButtons = document.querySelectorAll('.app__turn__button'); 
console.log(turnButtons)
export default function changeTurn() 
{
    turn = (turn + 1) % 3;  
    for (let i of turnButtons) i.classList.remove('--red' , '--yellow' , '--blue' , 'animation-changeColor'); 
    switch (turn) {
        case 0: turnButtons[0].classList.add('--red' , 'animation-changeColor'); break;  
        case 1: turnButtons[1].classList.add('--blue' , 'animation-changeColor'); break; 
        case 2: turnButtons[2].classList.add('--yellow' , 'animation-changeColor'); break; 
    }
}