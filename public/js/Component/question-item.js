export default function question_item(obj) {
    return `<div class="question__col question__item col l2 bg-white transition-all duration-200 ease-in-out" id = "${obj.id}">${obj.id}
                <span class = "level --non-active">${obj.level}</span>
    </div>`
}
//Question duoc viet duoi dang la question01, question02, question03, question04,... question36