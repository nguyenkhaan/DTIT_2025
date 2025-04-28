import makeMemeber from "./Component/member.js";
const memberList = document.querySelector('.member__lists'); 
export default function makeTeam(name , score , color) 
{
    const li = document.createElement('li'); 
    li.classList.add('member__item'); 
    li.innerHTML = makeMemeber(name , score , color); //Truyen chuoi red de lay mau do 
    memberList.append(li)
    return li; 
}
function chooseTeam(team, args) {
    for (let i of args) i.classList.remove('--choose'); 
    team.classList.add('--choose')
}
export {chooseTeam}