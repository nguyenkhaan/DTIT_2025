const teamWinSelection = document.querySelector('#select_team-win')
export default function teamWin() 
{
    teamWinSelection.onchange = function() {
        teamWinSelection.classList.remove('--red' , '--blue' , '--yellow' , '--green'); 
    }
} 
