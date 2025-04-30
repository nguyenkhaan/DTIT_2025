import question_item from "./Component/question-item.js";
let questions = []; 
const o = (id, level) => ({ id, level });
function createARow() 
{
    const row = document.createElement('div'); 
    row.classList.add('row' , 'question__row')
    return row; 
} 
function attachQuestionToRow(row, ...args) 
{
    // args = args.map(x => ((x.id < 10)? '0' : '') + x.id) 
    for (let i of args) i.id = ((i.id < 10)? '0' : '') + i.id; 
    let html = ''; 
    for (let i of args) html += question_item(i); 
    row.innerHTML = html; 
    return row;  
}
export default function makeQuestionBoard() 
{
    console.log(o(1 , '?'))
    const questionBoard = document.querySelector('.question-board__questions'); 
    questionBoard.append(attachQuestionToRow(createARow(), o(1, '?'), o(2, ''), o(3, ''), o(4, ''), o(5, '!'), o(6, '')));
    questionBoard.append(attachQuestionToRow(createARow(), o(7, ''), o(8, ''), o(9, '!'), o(10, ''), o(11, ''), o(12, '?')));
    questionBoard.append(attachQuestionToRow(createARow(), o(13, ''), o(14, '?'), o(15, ''), o(16, ''), o(17, ''), o(18, '')));
    questionBoard.append(attachQuestionToRow(createARow(), o(19, ''), o(20, '!'), o(21, ''), o(22, ''), o(23, '?'), o(24, '')));
    questionBoard.append(attachQuestionToRow(createARow(), o(25, '!'), o(26, ''), o(27, ''), o(28, '?'), o(29, ''), o(30, '!')));
    questionBoard.append(attachQuestionToRow(createARow(), o(31, ''), o(32, ''), o(33, ''), o(34, '!'), o(35, ''), o(36, '?')));
    questions = document.querySelectorAll('.question__col'); 
    return questions 
}