import modalHeading from "./Component/modalHeading.js";
import modalQuestion from "./Component/modalQuestion.js";
import questionChoiceList from "./Component/questionChoiceList.js";
import { colorClass } from "./public.js";
const modal = document.querySelector('.app__modal');
const modalWrapper = document.querySelector('.modal__wrapper')
import changeTurn from "./turnAndScore.js";
import { updateInfoTeam } from "./turnAndScore.js";
const bar = document.getElementById('time-bar');
let flagFirstTurn = 0 
function modalQuestionHTMLMaker(content) {
    let ans = modalQuestion(content);
    return ans;
}
function modalQuestionAnsHTMLMaker(args) {
    let ans = questionChoiceList(args);
    return ans;
}
let timeoutId = null; // Biến toàn cục hoặc được dùng chung để quản lý hủy timeout

function startTimer(delay) {
    const duration = delay;
    let timeLeft = duration;
    function updateBar() {
        const percent = timeLeft / duration;
        bar.style.transform = `scaleX(${percent})`;

        if (timeLeft < 0) {
            modalWrapper.classList.add('end-time');
            return;
        }

        timeLeft--;
        timeoutId = setTimeout(updateBar, 1000); // Gán vào biến để sau này còn hủy được
    }

    updateBar();
}
function markButton(button , currentTeam) 
{
    button.onclick = null
    button.style.pointerEvents = "none"
    //Xử lí màu cho đội hiện tại nếu đội đó đã trả lời đúng 
    switch (currentTeam.teamID) {
        case 0: button.classList.add(colorClass[0]); break; 
        case 1: button.classList.add(colorClass[1]); break; 
        case 2: button.classList.add(colorClass[2]); break; 
        case 3: button.classList.add(colorClass[3]); break; 
    }
}
let currentTeam = undefined; 
export default function makePopup(buttonID, header, content, args, idQuestion, scoreBonus) //Bo sung them hai tham so idQuestion va score 
{
    //console.log(buttonID); 
    //Tiêu đề câu hỏi: Câu hoi 1, câu hỏi 2, câu hỏi 3, câu hỏi 4,... 
    if (!flagFirstTurn) {
        flagFirstTurn = 1 
        currentTeam = changeTurn() 
    }
    console.log(currentTeam) 
    modal.classList.remove('--non-active');
    const modalHeader = document.querySelector('.modal__header');
    modalHeader.innerHTML = modalHeading(header);
    //Xử lí nội dung câu hỏi -> render nội dung câu hỏi 
    const modalQues = document.querySelector('.modal__question__box');
    modalQues.innerHTML = modalQuestionHTMLMaker(content)
    //Xử lí nội dung câu trả lời -> render các câu trả lời 
    const modalQuesAns = document.querySelector('.question__choice__wrapper');
    modalQuesAns.innerHTML = modalQuestionAnsHTMLMaker(args);
    //Dựa vào scoreBonus để tính thời gian delay (sẽ code sau)
    let delay;
    if (scoreBonus == 10) delay = 1 //Câu dễ
    if (scoreBonus == 20) delay = 2 //Câu trung bình 
    if (scoreBonus == 30) delay = 3 //Câu khó 
    document.onkeydown = function(e) {
        if (e.key === 'Enter') {
            startTimer(10); 
        }
    }
    console.log(currentTeam) 
    // startTimer(10); 
    //Đếm thời gian câu hỏi 
    //Xử lí câu trả lời là đúng hay sai và ghi vào log 
    const trueButton = document.querySelector('.--true-button');
    const falseButton = document.querySelector('.--false-button');
    trueButton.onclick = function () {
        //Thêm hiệu ứng ấn vào button (maybe sẽ code sau, cái này hiện chưa code)
        //Tô màu cho cái button đã được nhấn ở đây 
        markButton(buttonID , currentTeam) 

       // updateInfoTeam(trueButton, currentTeam, idQuestion, scoreBonus);
    }
    falseButton.onclick = function () {
         
        //updateInfoTeam(falseButton, currentTeam, idQuestion, 0);
        //Sau này, muốn cậ nhât log story thì hãy mở comment 2 dòng lệnh này ở hai nút true và false button 
    }
    //Sự biến mất của pop up 
    const closeIcon = document.querySelector('.modal__header i')
    closeIcon.onclick = () => {
        clearTimeout(timeoutId); // Hủy timeout hiện tại
        modalWrapper.classList.remove('end-time')
        modal.classList.add('--non-active')
        const percent = '100%'
        bar.style.transform = `scaleX(${percent})`;   //Thực hiện vẽ lại thời gian ban đầu cho dồng hồ 
        currentTeam = changeTurn();
    }
}
//**
// Chú ý về sự khác nhau giữa addEventListener và onclick addEventListener thì thêm hiệu ứng vô, kiểu nó repeat, onclick thì không
//  */