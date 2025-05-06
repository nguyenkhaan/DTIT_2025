export default function modalHeading(level) 
{
    return `
        <div class="modal__question__heading gap-4 flex items-center justify-center">
            <span class = "modal__question__heading block">${level}</span> 
            <div class="ml-4 mb-1 count-down font-monos text-base text-white p-auto justify-center bg-red-400 rounded-xl w-46 flex items-center h-full">
           
                    <span class="timer__label block italic font-mono text-center clock-fonts font-bold h-full w-full text-5xl">00</span>
            </div>
        </div>
        <i class="fa-solid fa-xmark"></i>
    `
}
//Truyen vo dang cau hoi Kho, Trung binh, De ? 