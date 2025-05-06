import makeMemeber from "./Component/member.js";
const memberList = document.querySelector('.member__lists');
export default function makeTeam(name, score, color) {
    const li = document.createElement('li');
    li.classList.add('member__item');
    li.innerHTML = makeMemeber(name, score, color);
    /*
    red: đỏ 
    blue: xanh dương 
    green: xanh lá cây 
    yellow: vàng 
    orange: cam 
    purple: tím mộng mơ  
    pink: hồng  
    */
    memberList.append(li)
    return li;
}
function chooseTeam(team, args) {
    for (let i of args) i.team.classList.remove('--choose');
    team.classList.add('--choose')
}
/* Hàm chooseTeam: Đây là lượt của đội nào? 
- Đối số 1: Đội hiện tại đang tới lượt (VD tới lượt team1 thì truyền team1). 
- Đối số 2: Mảng quản lí toàn bộ các đội 
*/
export { chooseTeam }