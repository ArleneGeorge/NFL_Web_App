const body = document.body
const searchParams = new URLSearchParams(window.location.search)
const query  = searchParams.get('id')


    function createCard(budget){
        let div = document.createElement('div') 
        
        div.className = "card" 

        let p = document.createElement('p')
        // let h5 = document.createElement('h5')
        // let h6 = document.createElement('h6')
        // let h9 = document.createElement('h9')
        // let p = document.createElement('p')
        
        

        p.innerText = `Number of Players on the Team: ${budget.number_of_players} \n \n Amount spent on Quaterbacks: ${budget.quarterback} M \n \n Amount Spent on Running Back: ${budget.running_back} M \n \n Amount Spent on Wide Reciever: ${budget.wide_reciever} M \n \n Amount Spent on Tight Ends: ${budget.tight_end} M  \n \n Amount Spent on Offensive Line: ${budget.offensive_lineman} M \n \n Amount Spent on Defensive Lineman: ${budget.defensive_lineman} M \n \n Amount Spent on Linebackers: ${budget.linebacker} M \n \n Amount Spent on Defensive Backs: ${budget.defensive_back} M \n \n Amount Spent on Kickers: ${budget.kicker} M \n \n Total Budget Amount Spent: ${budget.total_budget_spent} M \n `
        //  p.innerText = `${player.first_name} ${player.last_name}'s Stats \n Jersey Number: ${player.number} \n age: ${player.age} \n Birth Place: ${player.birth_place} \n High School Attended: ${player.high_school} \n College Attended:  ${player.college} \n Football Position: ${player.position} \n Height: ${player.height}inches \n Weight: ${player.weight}lbs \n Seasons Played:  ${player.experience} \n`

       

        
    
        div.append(p)
    
        body.appendChild(div)

    
    }
    
    
    fetch(`http://localhost:3000/budgets/${query}`)
    .then (response => response.json())
    .then(createCard)