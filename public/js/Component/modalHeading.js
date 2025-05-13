import selectTeamWin from "./selectTeamWin.js"
export default function modalHeading(level , color) {
    return `
        <div class="modal__question__heading gap-4 flex items-center justify-center">
            <span class = "modal__question__heading block">${level}</span> 
            ${selectTeamWin(color)}
        </div>
        </div>
        <i class="fa-solid fa-xmark"></i>
    `
}
//Truyen vo dang cau hoi Kho, Trung binh, De ? 