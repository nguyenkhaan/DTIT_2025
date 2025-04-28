import question_item from "./Component/question-item.js";
let questions = []; 
function createARow() 
{
    const row = document.createElement('div'); 
    row.classList.add('row' , 'question__row')
    return row; 
} 
function attachQuestionToRow(row, ...args) 
{
    args = args.map(x => ((x < 10)? '0' : '') + x) 
    let html = ''; 
    for (let i of args) html += question_item(i); 
    row.innerHTML = html; 
    return row;  
}
export default function makeQuestionBoard() 
{
    const questionBoard = document.querySelector('.question-board__questions'); 
    questionBoard.append(attachQuestionToRow(createARow() , 1, 2, 3, 4, 5, 6)); 
    questionBoard.append(attachQuestionToRow(createARow() , 7, 8, 9, 10, 11, 12)); 
    questionBoard.append(attachQuestionToRow(createARow() , 13, 14, 15, 16, 17, 18)); 
    questionBoard.append(attachQuestionToRow(createARow() , 19, 20, 21, 22, 23, 24)); 
    questionBoard.append(attachQuestionToRow(createARow() , 25, 26, 27, 28, 29, 30)); 
    questionBoard.append(attachQuestionToRow(createARow() , 31, 32, 33, 34, 35, 36)); 
    questions = document.querySelectorAll('.question__col'); 
    return questions 
}