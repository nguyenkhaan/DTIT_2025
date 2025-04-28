import makeQuestionBoard from "./36questions.js" 
import makeFooter from "./makeFooter.js"
import makeNavbar from "./makeNavbar.js"
import makeTeam from "./team.js"
import { chooseTeam } from "./team.js"
import makePopup from "./makePopup.js"
const body = document.querySelector('body')
//Hiển thị các thành phần cơ bản: navbar, footer !!! Đừng chạm 
function baseRender() 
{
    makeNavbar(); 
    makeFooter(); 
}
baseRender(); 
/*----------------------------------------------------------------------------------------------------------*/
//Hiển thị 36 nút questions, giá trị trả về là mảng quản lí 36 questions 
const questions = makeQuestionBoard(); 
console.log(questions); 

//Danh sách đội tham gia 
const team1 = makeTeam('Gozyuu Wolf' , 50 , 'red')
const team2 = makeTeam('Gozyuu Leon' , 50 , 'blue') 
let teams = []; 
teams.push(team1); 
teams.push(team2); 
chooseTeam(team1 , teams)   
/* Hàm chooseTeam: Đây là lượt của đội nào? 
- Đối số 1: Đội hiện tại đang tới lượt (VD tới lượt team1 thì truyền team1). 
- Đối số 2: Mảng quản lí toàn bộ các đội 
*/ 

//Hàm random câu hỏi từ ngân hàng câu hỏi.  
//Return 1 obj gồm header (tiêu đề câu hỏi), content (Nội dung câu hỏi), choiceList (các lựa chọn A, B, C, D)
function randomQuestion() 
{
    //
    const obj = {}; 
    obj.header = 'Câu hỏi khó'
    obj.content = 'Một process đang ở trạng thái running, nếu process này thực thi theo bộ lập lịch Round Robin, \
                    nếu có sự kiện interrupt time slice xảy ra thì process này chuyển đến trạng thái nào?'; 
    obj.choiceList = ['A. Gặp hàm exit()' , 'A. Gặp hàm exit()' , 'A. Gặp hàm exit()' , 'A. Gặp hàm exit()']; 
    return obj; 
}
//Xử lí sư kiện: Khi Click vào 1 question trên Board thì hiện ra Popup 
function handleQuestionButtonClick() 
{
    for (let i of questions) 
    {
        i.onclick = () => {
            const questionObj = randomQuestion(); 
            makePopup(questionObj.header , questionObj.content , questionObj.choiceList); 
            /*Ham hiển thị popUp câu hỏi 
                - Đối số 1: Tiêu đề câu hỏi (Ex: Câu hỏi khó, dễ, trung bình...) 
                - Đối số 2: Nội dung câu hỏi 
                - Đối số 3: 4 sự lựa chọn A , B , C , D
            */ 
        }
    }
}
handleQuestionButtonClick(); 
