import modalHeading from "./Component/modalHeading.js";
import modalQuestion from "./Component/modalQuestion.js";
import questionChoiceList from "./Component/questionChoiceList.js";
import { colorClass } from "./public.js";
const modal = document.querySelector('.app__modal');
const modalWrapper = document.querySelector('.modal__wrapper')
import changeTurn from "./turnAndScore.js";
import { updateInfoTeam } from "./turnAndScore.js";
import modalQuestionAnsHTMLMaker from "./answerShow.js";

/* Dark theme code 
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js';
import cpp from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/languages/cpp.min.js';*/
import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/highlight.min.js';
import cpp from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/languages/cpp.min.js';
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();
const bar = document.getElementById('time-bar');
const showAnswerButton = document.querySelector('.show--answer'); 
const answerBox = document.querySelector('.question__box__answer'); 
let flagFirstTurn = 0
let flagTimer = 0;  
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
function markTrueButton(button, currentColor) {
    button.onclick = null
    button.innerText = ''; 
    button.style.pointerEvents = "none"
    //Xử lí màu cho đội hiện tại nếu đội đó đã trả lời đúng 
    switch (currentColor) {
        case 0: button.classList.add(colorClass[0]); button.innerHTML = '<i class="fa-brands fa-wolf-pack-battalion text-5xl"></i>';  break;
        case 1: button.classList.add(colorClass[1]); button.innerHTML = '<i class="fa-solid fa-dragon text-5xl"></i>'; break;
        case 2: button.classList.add(colorClass[2]); button.innerHTML = '<i class="fa-solid fa-worm text-5xl"></i>'; break;
        case 3: button.classList.add(colorClass[3]); button.innerHTML = '<i class="fa-solid fa-feather text-5xl"></i>'; break;
    }
}
function markFalseButton(button , currentColor) {
    button.onclick = null; 
    button.style.pointerEvents = 'none'; 
    button.innerText = ''; 
    button.classList.add('--gray'); 
    button.innerHTML = '<i class="fa-solid fa-skull text-5xl"></i>'; 
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
    
    modal.classList.remove('--non-active');
    const modalHeader = document.querySelector('.modal__header');
    modalHeader.innerHTML = modalHeading(header , colorClass[currentTeam.teamID]);
    let currentColor = currentTeam.teamID; 
    //Xử lí cho phần teamWinSelection 
    const teamWinSelection = document.querySelector('#select_team-win')
    teamWinSelection.value = currentTeam.teamID + 1 + ''; 
        teamWinSelection.onchange = function() {
        teamWinSelection.classList.remove('--red' , '--blue' , '--yellow' , '--green'); 
        const value = this.value; 
        switch (value) 
        {
            case '1': teamWinSelection.classList.add('--red'); currentColor = 0;  break;
            case '2': teamWinSelection.classList.add('--blue'); currentColor = 1; break;
            case '3': teamWinSelection.classList.add('--yellow'); currentColor = 2; break;
            case '4': teamWinSelection.classList.add('--green'); currentColor = 3; break;
        }
    }
    
    //Xử lí nội dung câu hỏi -> render nội dung câu hỏi 
    const modalQues = document.querySelector('.modal__question__box');
    //modalQues.innerHTML = modalQuestionHTMLMaker(content)
    modalQues.innerHTML = content
    //highlight codes 
    hljs.registerLanguage('cpp', cpp);
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
    //Xử lí nội dung câu trả lời -> render câu trả lời  
    showAnswerButton.onclick = function() {
       
        answerBox.style.display = 'block'; 
        modalQuestionAnsHTMLMaker(args); 
    }
    //Dựa vào scoreBonus để tính thời gian delay (sẽ code sau)
    let delay;
    if (scoreBonus == 10) delay = 1 //Câu dễ
    if (scoreBonus == 20) delay = 2 //Câu trung bình 
    if (scoreBonus == 30) delay = 3 //Câu khó 
    document.onkeydown = function(e) {
        if (e.key === 'Enter') {
            if (!flagTimer) {
                startTimer(10); 
                flagTimer = 1; 
            } 
        }
    }
    // startTimer(10); 
    //Đếm thời gian câu hỏi 
    //Xử lí câu trả lời là đúng hay sai và ghi vào log 
    const trueButton = document.querySelector('.--true-button');
    const falseButton = document.querySelector('.--false-button');
    trueButton.onclick = function () {
        //Thêm hiệu ứng ấn vào button (maybe sẽ code sau, cái này hiện chưa code)
        jsConfetti.addConfetti({
        emojis: ['🌞', '🌈', '✨', '😄', '🌟', '🥰', '☀️', '💖', '🎉', '🦋', '🫶', '😇', '💫'],
        })
         jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸' , '😃' , '☁️' , '💥'],
        }).then(() => jsConfetti.addConfetti()).then(() => jsConfetti.addConfetti()).then(() => jsConfetti.addConfetti()) 
        //Tô màu cho cái button đã được nhấn ở đây 
        markTrueButton(buttonID, currentColor)
        // updateInfoTeam(trueButton, currentTeam, idQuestion, scoreBonus);
    }
    falseButton.onclick = function () {
        jsConfetti.addConfetti({
        emojis: ['🏳️', '💀' , '💢'],
        })
        setTimeout(
            function() {
                 jsConfetti.addConfetti({
                    emojis : ['🏳️', '💀'], 

                })
                 jsConfetti.addConfetti({
                    emojis : ['🏳️' , '👿'], 

                })
                jsConfetti.addConfetti({
                    emojis :['🏳️', '🫠', '😡'], 

                })
                jsConfetti.addConfetti({
                emojis: ['🏳️', '💀' , '💢'],
                })
            }, 550
            
        );     
        markFalseButton(buttonID , currentColor); 
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
         answerBox.style.display = 'none'; 
        flagTimer = 0 
    }
}
//**
// Chú ý về sự khác nhau giữa addEventListener và onclick addEventListener thì thêm hiệu ứng vô, kiểu nó repeat, onclick thì không
//  */