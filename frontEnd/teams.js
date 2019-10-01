const body = document.body
const searchParams = new URLSearchParams(window.location.search)
const query  = searchParams.get('id')


    function createCard(team){
        let div = document.createElement('div') 
        
        div.className = "card" 

        let h1 = document.createElement('h3')
        let h5 = document.createElement('h5')
        let h6 = document.createElement('h6')
        let h9 = document.createElement('h9')
        let p = document.createElement('p')
        
        

        h1.innerText = team.name
        h5.innerText = team.conference
        h6.innerText = team.stadium_name
        h9.innerText = team.stadium_location
        // p.innerText = `Amount in millions spent on Quarterback postion ${budget.quarterback} \n Amount in millions spent on Quarterback postion ${budget.running_back} \n`


        // "number_of_players": 53.0,
        // "quarterback": 17.2,
        // "running_back": 10.2,
        // "wide_reciever": 22.3,
        // "tight_end": 4.9,
        // "offensive_lineman": 34.2,
        // "defensive_lineman": 38.9,
        // "linebacker": 9.0,
        // "defensive_back": 22.9,
        // "kicker": 5.8,
        // "total_budget_spent"
        
    
        div.append(h1, h5, h6, h9)
    
        body.appendChild(div)

    
    }
    
    
    fetch(`http://localhost:3000/teams/${query}`)
    .then (response => response.json())
    .then(createCard)