import turnButton from "./Component/turnButton.js";
//Hiển thị 3 turn buttons Đỏ - Xanh - Vàng - Xanh lá cây
export default function makeTurnButton() {
    const turnButtonWrapper = document.querySelector('.turn__butoon__wrapper');
    let htmls = turnButton().repeat(4)
    turnButtonWrapper.innerHTML = htmls;
}