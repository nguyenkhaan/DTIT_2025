import q01 from "../Data/Question/Cau01.js";
import q02 from "../Data/Question/Cau02.js";
import q03 from "../Data/Question/Cau03.js";
import q04 from "../Data/Question/Cau04.js";
import q05 from "../Data/Question/Cau05.js";
import q06 from "../Data/Question/Cau06.js";
import q07 from "../Data/Question/Cau07.js";
import q08 from "../Data/Question/Cau08.js";
import q09 from "../Data/Question/Cau09.js";
import q10 from "../Data/Question/Cau10.js";
import q11 from "../Data/Question/Cau11.js";
import q12 from "../Data/Question/Cau12.js";
import q13 from "../Data/Question/Cau13.js";
import q14 from "../Data/Question/Cau14.js";
import q15 from "../Data/Question/Cau15.js";
import q16 from "../Data/Question/Cau16.js";
import q17 from "../Data/Question/Cau17.js";
import q18 from "../Data/Question/Cau18.js";
import q19 from "../Data/Question/Cau19.js";
import q20 from "../Data/Question/Cau20.js";
import q21 from "../Data/Question/Cau21.js";
import q22 from "../Data/Question/Cau22.js";
import q23 from "../Data/Question/Cau23.js";
import q24 from "../Data/Question/Cau24.js";
import q25 from "../Data/Question/Cau25.js";
import q26 from "../Data/Question/Cau26.js";
import q27 from "../Data/Question/Cau27.js";
import q28 from "../Data/Question/Cau28.js";
import q29 from "../Data/Question/Cau29.js";
import q30 from "../Data/Question/Cau30.js";
import q31 from "../Data/Question/Cau31.js";
import q32 from "../Data/Question/Cau32.js";
import q33 from "../Data/Question/Cau33.js";
import q34 from "../Data/Question/Cau34.js";
import q35 from "../Data/Question/Cau35.js";
import q36 from "../Data/Question/Cau36.js";
let questionData = [
  q01, q02, q03, q04, q05, q06, q07, q08, q09, q10,
  q11, q12, q13, q14, q15, q16, q17, q18, q19, q20,
  q21, q22, q23, q24, q25, q26, q27, q28, q29, q30,
  q31, q32, q33, q34, q35, q36
];
questionData = questionData.map(x => x()); 
import a01 from "../Data/Answer/Da01.js"
import a02 from "../Data/Answer/Da02.js"
import a03 from "../Data/Answer/Da03.js"
import a04 from "../Data/Answer/Da04.js"
import a05 from "../Data/Answer/Da05.js"
import a06 from "../Data/Answer/Da06.js"
import a07 from "../Data/Answer/Da07.js"
import a08 from "../Data/Answer/Da08.js"
import a09 from "../Data/Answer/Da09.js"
import a10 from "../Data/Answer/Da10.js"
import a11 from "../Data/Answer/Da11.js"
import a12 from "../Data/Answer/Da12.js"
import a13 from "../Data/Answer/Da13.js"
import a14 from "../Data/Answer/Da14.js"
import a15 from "../Data/Answer/Da15.js"
import a16 from "../Data/Answer/Da16.js"
import a17 from "../Data/Answer/Da17.js"
import a18 from "../Data/Answer/Da18.js"
import a19 from "../Data/Answer/Da19.js"
import a20 from "../Data/Answer/Da20.js"
import a21 from "../Data/Answer/Da21.js"
import a22 from "../Data/Answer/Da22.js"
import a23 from "../Data/Answer/Da23.js"
import a24 from "../Data/Answer/Da24.js"
import a25 from "../Data/Answer/Da25.js"
import a26 from "../Data/Answer/Da26.js"
import a27 from "../Data/Answer/Da27.js"
import a28 from "../Data/Answer/Da28.js"
import a29 from "../Data/Answer/Da29.js"
import a30 from "../Data/Answer/Da30.js"
import a31 from "../Data/Answer/Da31.js"
import a32 from "../Data/Answer/Da32.js"
import a33 from "../Data/Answer/Da33.js"
import a34 from "../Data/Answer/Da34.js"
import a35 from "../Data/Answer/Da35.js"
import a36 from "../Data/Answer/Da36.js"
let answerData =  [
  a01, a02, a03, a04, a05, a06,
  a07, a08, a09, a10, a11, a12,
  a13, a14, a15, a16, a17, a18,
  a19, a20, a21, a22, a23, a24,
  a25, a26, a27, a28, a29, a30,
  a31, a32, a33, a34, a35, a36
];
answerData = answerData.map(x => x()); 
export {questionData , answerData} 
