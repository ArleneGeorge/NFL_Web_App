
const body = document.body
const searchParams = new URLSearchParams(window.location.search)
const query  = searchParams.get('id')


    function createCard(team){

        let teamBudgetLowerHeader = document.createElement('div')
        teamBudgetLowerHeader.className = "teamBudgetLowerHeader"
        let div = document.createElement('div')
        div.className = "budgets"

        let h1 = document.createElement('h1')
        let h5 = document.createElement('h5')
        let img = document.createElement('img')
        img.className = 'teamPageLogo'
        
      
    
        
        h1.innerText = team.name
        img.src =  team.logo
        h5.innerText = `Division: ${team.conference} \n`

        
      

        teamBudgetLowerHeader.append(h1, img, h5 )

        team.budgets.forEach(budget => {
            let p = document.createElement('p')
            p.className = "budgetCards"

            p.innerText = `Number of Players on the Team: ${budget.number_of_players} \n \n Amount spent on Quaterbacks: ${budget.quarterback} M \n \n Amount Spent on Running Back: ${budget.running_back} M \n \n Amount Spent on Wide Reciever: ${budget.wide_reciever} M \n \n Amount Spent on Tight Ends: ${budget.tight_end} M  \n \n Amount Spent on Offensive Line: ${budget.offensive_lineman} M \n \n Amount Spent on Defensive Lineman: ${budget.defensive_lineman} M \n \n Amount Spent on Linebackers: ${budget.linebacker} M \n \n Amount Spent on Defensive Backs: ${budget.defensive_back} M \n \n Amount Spent on Kickers: ${budget.kicker} M \n \n Total Budget Amount Spent: ${budget.total_budget_spent} M \n `


            div.appendChild(p)
        })


        

        body.appendChild(teamBudgetLowerHeader)
        body.appendChild(div)
    }
                
           


    fetch(`http://localhost:3000/teams/${query}`)
    .then (response => response.json())
    .then(createCard)



