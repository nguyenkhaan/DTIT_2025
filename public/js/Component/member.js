export default function makeMemeber(name, score, color = 'default') {
    if (color != 'default') color = '--' + color;
    if (isNaN(String(score))) score = '###'
    return `
    <div class="member__wrapper">
        <div class="member__color ${color}"></div>
                            <span class="member__name roboto-font">${name}</span>
    </div>
    <span class="member__score ">${score}</span>
    `
}
//Huong dan su dung: Moi member se gom co ten doi (Name), so diem khoi tao (Score) va mau sac (Color) : red, green, blue, yello 
//Neu khong truyen Color thi mac dinh la mau default 