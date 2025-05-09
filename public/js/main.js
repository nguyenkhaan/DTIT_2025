import makeQuestionBoard from "./36questions.js"
import makeFooter from "./makeFooter.js"
import makeNavbar from "./makeNavbar.js"
import makeTeam from "./team.js"
import { colorClass } from "./public.js"
const body = document.querySelector('body')
import questionLevelShow from "./questionLevelShow.js"
/*--------------------------------------------1. BASE RENDER ---------------------------------------------*/
//Hiển thị các thành phần cơ bản: navbar, footer !!! No Touch !!
function baseRender() {
    makeNavbar();
    makeFooter();
    questionLevelShow();
}
baseRender();
/*--------------------------------------------2. QUẢN LÍ 36 BUTTONS ---------------------------------------------*/
//Hiển thị 36 nút questions, giá trị trả về là mảng quản lí 36 questions 
import makePopup from "./makePopup.js"
const turnButtons = document.querySelectorAll('.app__turn__button');
const questions = makeQuestionBoard();
//Mảng questions quản lí 36 cái button 
/*--------------------------------------------3. DANH SÁCH ĐỘI THAM GIA ------------------------------------------------*/
function addTeam(teams, team) {
    let obj = {
        team: team,
        name: team.querySelector('.member__wrapper').querySelector('.member__name').innerText,
        score: 0
    }
    teams.push(obj)
}
//Tạo các team bằng hàm makeTeam 
const team1 = makeTeam('Gozyuu Wolf', 0, colorClass[0])
const team2 = makeTeam('Gozyuu Leon', 0, colorClass[1])
const team3 = makeTeam('Gozyuu Tyrano', 0, colorClass[2])
const team4 = makeTeam('Gozyuu Eagle', 0, colorClass[3])
// const team5 = makeTeam('Gozyuu Unicorn', 0, 'black')
//Sau khi tạo các team thì thêm chung vào mảng theo cú pháp bên dưới 
let teams = [];
addTeam(teams, team1)
addTeam(teams, team2)
addTeam(teams, team3)
addTeam(teams, team4)
// addTeam(teams, team5)
export { teams }
/*------------------------------------------------4. XỬ LÍ CÁC CÂU HỎI ---------------------------------------------------------*/
//Hàm random câu hỏi từ ngân hàng câu hỏi.  
//Return 1 obj gồm header (tiêu đề câu hỏi), content (Nội dung câu hỏi), choiceList (các lựa chọn A, B, C, D), id (mã câu hỏi), score (điểm số câu hỏi đó)
function randomQuestion() {
    const obj = {};
    obj.header = 'Câu hỏi 1'
    obj.content = marked.parse(`
# Tiêu đề H1

## Tiêu đề H2

### Tiêu đề H3

Xin chào! Đây là một đoạn văn bản *in nghiêng*, **in đậm**, và ***in nghiêng + đậm***.

---

- Danh sách không thứ tự:
  - Mục 1
  - Mục 2
    - Mục con 2.1

1. Danh sách có thứ tự:
   1. Bước một
   2. Bước hai

> Đây là một trích dẫn.

\`\`\`cpp
// Đây là đoạn mã code block
#include <bits/stdc++.h> 
using namespace std; 
\`\`\`
`);
    obj.choiceList = ['A. Gặp hàm exit()', 'A. Gặp hàm exit()', 'A. Gặp hàm exit()', 'A. Gặp hàm exit()'];
    obj.id = 1;     //Mã câu hỏi 
    obj.score = 10; //Điểm số của câu hỏi 
    return obj;
}
//Hiện popUp khi click vào 1 button trong 36 buttons 
function handleQuestionButtonClick() {
    for (let i of questions) {
        i.onclick = () => {

            const questionObj = randomQuestion(); //Hàm random question từ ngân hàng câu hỏi 
            makePopup(i, questionObj.header, questionObj.content, questionObj.choiceList, questionObj.id, questionObj.score);
            /*Ham hiển thị popUp câu hỏi 
                - Đối số 1: Tiêu đề câu hỏi (Ex: Câu hỏi khó, dễ, trung bình...) 
                - Đối số 2: Nội dung câu hỏi 
                - Đối số 3: 4 sự lựa chọn A , B , C , D
                - Đối số 4: idQuestion, dùng để biết đội nào được hỏi câu nào 
                - Đối số 5: Điểm số của câu hỏi đó? Là câu dễ hay khó từ đó phân chia mức điểm phù hợp 
            */
        }
    }
}
handleQuestionButtonClick(); 
