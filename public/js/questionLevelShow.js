const color = (ch) => {
    if (ch == '?') return '#FF0B55'
    else if (ch == '!') return '#FCF259'
    return '#9EDF9C'     //Cái này tôi gán cứng là 3 màu tượng trưng cho dộ khó 
}
const show = function (args, board) {
    for (let i of board) {

        i.style.transition = 'background-color 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease';
    }
    for (let i = 0; i < 36; ++i) {
        args[i].classList.remove('--non-active');
        board[i].style.backgroundColor = color(args[i].innerText);
    }

}
const unshow = function (args, board) {
    for (let i of args) i.style.animation = 'fadeOut 0.5s linear forwards';
    setTimeout(() => {
        for (let i = 0; i < 36; ++i) {
            args[i].classList.add('--non-active');
            board[i].style.backgroundColor = 'var(--button-color)';
        }
    }, 600);
}
export default function questionLevelShow() {
    const $questionMark = document.querySelector('.question-board__heading i')
    const delay = 5 * 1000;

    $questionMark.addEventListener('click', function () {
        const questionBoard = document.querySelectorAll('.question__col');
        const questionLevels = document.querySelectorAll('.level');
        show(questionLevels, questionBoard)
        setTimeout(function () {
            $questionMark.style.cursor = 'default';
            $questionMark.style.opacity = 0.6;
            unshow(questionLevels, questionBoard)
        }, delay);
    })
}