const body = document.body
const searchParams = new URLSearchParams(window.location.search)
const query  = searchParams.get('id')


    function createCard(player){
        let div = document.createElement('div') 
        
        div.className = "card" 

        let h1 = document.createElement('h1')
        // let h5 = document.createElement('h5')
        // let h6 = document.createElement('h6')
        // let h9 = document.createElement('h9')
        let p = document.createElement('p')
        
        

        h1.innerText = `${player.name}`
         p.innerText = `${player.name}'s Stats \n ${player.number} \n age: ${player.age} \n Birth Place ${player.birth_place} \n High School Attended ${player.high_school} \n College attended  ${player.college} \n Football Position ${player.position} \n Height ${player.height}inches \n Weight ${player.weight}lbs \n Seasons Played  ${player.experiene} \n`

      
        
    
        div.append(h1, p)
    
        body.appendChild(div)

    
    }
    
    
    fetch(`http://localhost:3000/players/${query}`)
    .then (response => response.json())
    .then(createCard)