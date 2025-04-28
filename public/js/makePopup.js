import modalHeading from "./Component/modalHeading.js";
import modalQuestion from "./Component/modalQuestion.js";
import questionChoiceList from "./Component/questionChoiceList.js";
const modal = document.querySelector('.app__modal'); 
function modalQuestionHTMLMaker(content , args) 
{
    let ans = modalQuestion(content); 
    ans += questionChoiceList(args); 
    return ans; 
}
export default function makePopup(level , content , args)
{
    //Tiêu đề câu hỏi: Câu hỏi khó, dễ, trung bình,... 
    modal.classList.remove('--non-active'); 
    const modalHeader = document.querySelector('.modal__header');
    modalHeader.innerHTML = modalHeading(level); 
    //Xử lí nội dung câu hỏi 
    const modalQues = document.querySelector('.modal__question__box'); 
    modalQues.innerHTML = modalQuestionHTMLMaker(content , args)
    const closeIcon = document.querySelector('.modal__header i') 
    closeIcon.onclick = () => {
        modal.classList.add('--non-active')
    }
}