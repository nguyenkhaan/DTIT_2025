import modalHeading from "./Component/modalHeading.js";
import modalQuestion from "./Component/modalQuestion.js";
import questionChoiceList from "./Component/questionChoiceList.js";
const modal = document.querySelector('.app__modal');
const modalWrapper = document.querySelector('.modal__wrapper')
import changeTurn from "./turnAndScore.js";
import { updateInfoTeam } from "./turnAndScore.js";
const bar = document.getElementById('time-bar');
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
export default function makePopup(header, content, args, idQuestion, scoreBonus) //Bo sung them hai tham so idQuestion va score 
{
    //Tiêu đề câu hỏi: Câu hoi 1, câu hỏi 2, câu hỏi 3, câu hỏi 4,... 
    let currentTeam = changeTurn();
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
    // startTimer(10); 
    //Đếm thời gian câu hỏi 
    //Xử lí câu trả lời là đúng hay sai và ghi vào log 
    const trueButton = document.querySelector('.--true-button');
    const falseButton = document.querySelector('.--false-button');
    trueButton.onclick = function () {
        //Thêm hiệu ứng ấn vào button (maybe sẽ code sau, cái này hiện chưa code)
        updateInfoTeam(trueButton, currentTeam, idQuestion, scoreBonus);
    }
    falseButton.onclick = function () {
        updateInfoTeam(falseButton, currentTeam, idQuestion, 0);
    }
    //Sự biến mất của pop up 
    const closeIcon = document.querySelector('.modal__header i')
    closeIcon.onclick = () => {
        clearTimeout(timeoutId); // Hủy timeout hiện tại
        modalWrapper.classList.remove('end-time')
        modal.classList.add('--non-active')
        const percent = '100%'
        bar.style.transform = `scaleX(${percent})`;   //Thực hiện vẽ lại thời gian ban đầu cho dồng hồ 
    }
}
//**
// Chú ý về sự khác nhau giữa addEventListener và onclick addEventListener thì thêm hiệu ứng vô, kiểu nó repeat, onclick thì không
//  */