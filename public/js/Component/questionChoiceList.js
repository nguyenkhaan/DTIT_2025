import questionChoiceItem from "./questionChoiceItem.js";
export default function questionChoiceList(args) {
    let innerChoice = args.map(x => questionChoiceItem(x)).join('');
    return `
        <ul class="question__box__choice">
            ${innerChoice}
        </ul>
    `
}