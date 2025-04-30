const show = function(args) {
    for (let i of args) i.classList.remove('--non-active'); 
}
const unshow = function(args) {
    for (let i of args) i.style.animation = 'fadeOut 0.5s linear forwards'; 
    setTimeout(() => {
        for (let i of args) i.classList.add('--non-active'); 
    }, 600); 
}
export default function questionLevelShow() 
{
    const $questionMark = document.querySelector('.question-board__heading i') 
    const delay = 5 * 1000; 
    $questionMark.addEventListener('click' , function() {
        const questionLevels = document.querySelectorAll('.level'); 
        show(questionLevels)
        setTimeout(function() {
            $questionMark.style.cursor = 'default'; 
            $questionMark.style.opacity = 0.6; 
            unshow(questionLevels) 
        }, delay); 
    })
}