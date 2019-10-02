const body = document.body
const searchParams = new URLSearchParams(window.location.search)
const query  = searchParams.get('id')


    function createCard(team){
        let div = document.createElement('div') 
        
        div.className = "card" 

        let h1 = document.createElement('h1')
        let h5 = document.createElement('h5')
        
      
    
        
        h1.innerText = team.name
        h5.innerText = `Division: ${team.conference} \n`

        
      

        div.append(h1, h5)

        team.budgets.forEach(budget => {
            let a2 = document.createElement('a')

            a2.href = `budgets.html?id=${budget.id} `
            a2.innerText = `Team Budget \n \n `

            div.appendChild(a2)
        })

        team.players.forEach(player => {
            
            
            let a = document.createElement('a')
            

            a.href = `players.html?id=${player.id}`
            a.innerText = `${player.first_name} ${player.last_name}\n \n`
            

            div.appendChild(a)
        
        })

        
    
        body.appendChild(div)

    
    }
    
    // function findPlayers(player){
    //     let div2 = document.createElement('div') 
        
    //     div2.className = "playerCard" 

      

    //     let h1 = document.createElement('h1')
    //     // let h5 = document.createElement('h5')
    //     // let h6 = document.createElement('h6')
    //     // let h9 = document.createElement('h9')
    //     let p = document.createElement('p')
        
        

    //     h1.innerText = `${player.name}`
    //     //  p.innerText = `${player.name}'s Stats \n Jersey Number: ${player.number} \n age: ${player.age} \n Birth Place: ${player.birth_place} \n High School Attended: ${player.high_school} \n College Attended:  ${player.college} \n Football Position: ${player.position} \n Height: ${player.height}inches \n Weight: ${player.weight}lbs \n Seasons Played:  ${player.experience} \n`

      
        
    
    //     div2.append(h1, p)
    
    //     body.appendChild(div2)

    
    // }

    fetch(`http://localhost:3000/teams/${query}`)
    .then (response => response.json())
    .then(createCard)

    // fetch(`http://localhost:3000/players`)
    // .then (response => response.json())
    // .then(findPlayers)
    
   