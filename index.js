let scoreTeam1 = document.getElementById("scoreTeam1")
let scoreTeam2 = document.getElementById("scoreTeam2")
let score1 = 0
let score2 = 0

function Point11(){
    score1 = score1 + 1
    scoreTeam1.textContent = score1
}

function Point12(){
    score2 = score2 + 1
    scoreTeam2.textContent = score2
}

function Point21(){
    score1 = score1 + 2
    scoreTeam1.textContent = score1
}

function Point22(){
    score2 = score2 + 2
    scoreTeam2.textContent = score2
}

function Point31(){
    score1 = score1 + 3
    scoreTeam1.textContent = score1
}

function Point32(){
    score2 = score2 + 3
    scoreTeam2.textContent = score2
}