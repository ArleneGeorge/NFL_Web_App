const body = document.body

function teamCards(teams){

    let div = document.createElement('div')
    div.className = "cards"


    teams.forEach(team => {
        let createCards = document.createElement('div')
        createCards.className = 'teamNameCard'
       

        createCards.innerHTML = `<a href = 'teams.html?id=${team.id}'\n>${team.name}</a>`;

        

        div.append(createCards)
        
        team.budgets.forEach(budget => {
            let p = document.createElement('p')
            p.className = "budgetInfo"
    
        p.innerText = `Number of Players on the Team: ${budget.number_of_players} \n \n Amount spent on Quaterbacks: ${budget.quarterback} M \n \n Amount Spent on Running Back: ${budget.running_back} M \n \n Amount Spent on Wide Reciever: ${budget.wide_reciever} M \n \n Amount Spent on Tight Ends: ${budget.tight_end} M  \n \n Amount Spent on Offensive Line: ${budget.offensive_lineman} M \n \n Amount Spent on Defensive Lineman: ${budget.defensive_lineman} M \n \n Amount Spent on Linebackers: ${budget.linebacker} M \n \n Amount Spent on Defensive Backs: ${budget.defensive_back} M \n \n Amount Spent on Kickers: ${budget.kicker} M \n \n Total Budget Amount Spent: ${budget.total_budget_spent} M \n \n `
    
            div.appendChild(p)
        })

    })

    

    body.appendChild(div)
}






fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(teamCards)