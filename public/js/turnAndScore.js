import { chooseTeam } from "./team.js";
import { teams } from "./main.js";
import { addLog , printLog } from "./log.js";
let turn = -1;    //Khoi tao ban dau chua co luot 
const turnButtons = document.querySelectorAll('.app__turn__button'); 
export default function changeTurn() //close pop_up and changeTurn() 
{
    const teamSize = teams.length; 
    let current = (turn + 1) % teamSize; 
        chooseTeam(teams[current].team , teams); 
    turn = (turn + 1) % 3;  
    for (let i of turnButtons) i.classList.remove('--red' , '--yellow' , '--blue' , 'animation-changeColor'); 
    switch (turn) {
        case 0: turnButtons[0].classList.add('--red' , 'animation-changeColor');  break;  
        case 1: turnButtons[1].classList.add('--yellow' , 'animation-changeColor');  break; 
        case 2: turnButtons[2].classList.add('--green' , 'animation-changeColor');  break; 
    }
    return teams[current]   //Tra ve doi hien tai de lay currentInfo 
}
function updateInfoTeam(button , currentTeam , idQuestion , scoreBonus = 10) {
    /*
    curretTeam: ca 1 phan tu team luon (the quan li, name , ...); 
    idQuestion: ma cau hoi 
    score: diem cong cua cau hoi 
    */ 
    let newTeam = currentTeam; 
    if (button == document.querySelector('.--true-button')) {
        newTeam.score += scoreBonus; 
        currentTeam.team.querySelector('.member__score').innerText = newTeam.score; 
            currentTeam = newTeam; //Thực hiện update gía trị trong mảng 
        addLog(newTeam.name , idQuestion, 1 , newTeam.score); 
    }  
    else addLog(newTeam.name , idQuestion , 0 , newTeam.score); 
    printLog(); 
}
export {updateInfoTeam}


/*THONG TIN 1 PHAN TU DUOC LUU TRU TRONG MANG teams 
    const obj = {
        team: team (cai the nam ngoai cung quan li doi)
        name: ten doi  
        score: 0 
    } 
*/ 