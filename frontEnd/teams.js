const body = document.body
const searchParams = new URLSearchParams(window.location.search)
const query  = searchParams.get('id')


    function createCard(team){
        let secondHeader = document.createElement('div')
        secondHeader.className = "secondHeader"
        let div = document.createElement('div')
        div.className = "players"

        let h1 = document.createElement('h1')
        let h5 = document.createElement('h5')
        let img = document.createElement('img')
        img.className = 'teamPageLogo'
        
      
    
        
        h1.innerText = team.name
        img.src =  team.logo
        h5.innerText = `Division: ${team.conference} \n`

        
      

        secondHeader.append(h1, img, h5 )

        team.budgets.forEach(budget => {
            let a2 = document.createElement('a')
            a2.className = "budgetLink"

            a2.href = `\nbudgets.html?id=${budget.id} `
            a2.innerText = `Team Budget \n`

            secondHeader.appendChild(a2)
        })


        

        team.players.forEach(player => {
            let createCards = document.createElement('div')
            createCards.className = "each_player"

            createCards.innerHTML = `<a href = 'players.html?id=${player.id}'\n>${player.first_name} ${player.last_name}</a>`;
    
            
    
            div.append(createCards)
        })
        body.appendChild(secondHeader)
        body.appendChild(div)
    }
                
           


    fetch(`http://localhost:3000/teams/${query}`)
    .then (response => response.json())
    .then(createCard)


    
   