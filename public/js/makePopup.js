import modalHeading from "./Component/modalHeading.js";
import modalQuestion from "./Component/modalQuestion.js";
import questionChoiceList from "./Component/questionChoiceList.js";
const modal = document.querySelector('.app__modal');  
import changeTurn from "./turnAndScore.js";
import { updateInfoTeam } from "./turnAndScore.js";
function modalQuestionHTMLMaker(content) 
{
    let ans = modalQuestion(content);  
    return ans; 
}
function modalQuestionAnsHTMLMaker(args) 
{
    let ans = questionChoiceList(args); 
    return ans; 
} 
export default function makePopup(header , content , args, idQuestion , scoreBonus) //Bo sung them hai tham so idQuestion va score 
{
    //Tiêu đề câu hỏi: Câu hoi 1, câu hỏi 2, câu hỏi 3, câu hỏi 4,... 
    let currentTeam = changeTurn(); 
    modal.classList.remove('--non-active'); 
    const modalHeader = document.querySelector('.modal__header');
    modalHeader.innerHTML = modalHeading(header); 
    //Xử lí nội dung câu hỏi 
    const modalQues = document.querySelector('.modal__question__box'); 
    modalQues.innerHTML = modalQuestionHTMLMaker(content)
    //Xử lí nội dung câu trả lời 
    const modalQuesAns = document.querySelector('.question__choice__wrapper'); 
    modalQuesAns.innerHTML = modalQuestionAnsHTMLMaker(args); 
    //Xử lí câu trả lời là đúng hay sai và ghi vào log 
    const trueButton = document.querySelector('.--true-button'); 
    const falseButton = document.querySelector('.--false-button'); 
    console.log(trueButton);  
    trueButton.onclick = function() { 
        //Thêm hiệu ứng ấn vào button 
        updateInfoTeam(trueButton , currentTeam , idQuestion , scoreBonus); 
    }
    falseButton.onclick = function() {
        updateInfoTeam(falseButton , currentTeam , idQuestion , 0); 
    }
    //Sự biến mất của pop up 
    const closeIcon = document.querySelector('.modal__header i') 
    closeIcon.onclick = () => {
        
        modal.classList.add('--non-active')
    }
}
//**
// Chú ý về sự khác nhau giữa addEventListener và onclick addEventListener thì thêm hiệu ứng vô, kiểu nó repeat, onclick thì không
//  */