export default function selectTeamWin(color) {
    return `
    <select id="select_team-win" class = "w-70 h-14 ${color} border-solid border-black border-1 ml-5 rounded-xl text-center text-3xl text-gray-800">
                <option class = "select_team-win-item" value="1">Team 1</option>
                <option class = "select_team-win-item" value="2">Team 2</option>
                <option class = "select_team-win-item" value="3">Team 3</option> 
                <option class = "select_team-win-item" value="4">Team 4</option>
            </select>
    `
    
}