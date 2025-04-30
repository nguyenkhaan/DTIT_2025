import turnButton from "./Component/turnButton.js";
export default function makeTurnButton()    //Hien thi turn buttons; 
{
    const turnButtonWrapper = document.querySelector('.turn__butoon__wrapper'); 
    let htmls = turnButton().repeat(3) 
    turnButtonWrapper.innerHTML = htmls; 
}