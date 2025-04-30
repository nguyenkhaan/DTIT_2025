let table = []; 
function addLog(nameTeam , id_question , res , score) 
{
    let obj = {
        team: nameTeam,    //name of your team 
        idQuestion: id_question,    //id question 
        res: res,   //1 = correct , 0 = uncorrec 
        currentScore: score   //the score that team have at that time 
    }
    table.push(obj); 
    return obj; 
}

function printLog() {
    console.log(table); 
    fetch('http://localhost:3000' , {
        method: 'POST' , 
        headers: {
            'Content-Type': 'application/json', // Định dạng của dữ liệu gửi đi là JSON
        },
        body: JSON.stringify(table)
    })
}
export {addLog , printLog} 
