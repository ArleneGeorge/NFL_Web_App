// const body = document.body
// const searchParams = new URLSearchParams(window.location.search)
// const query  = searchParams.get('id')


//     function createCard(player){
//         let div = document.createElement('div') 
        
//         div.className = "card" 

//         let h1 = document.createElement('h1')
//         // let h5 = document.createElement('h5')
//         // let h6 = document.createElement('h6')
//         // let h9 = document.createElement('h9')
//         let p = document.createElement('p')
        
        

//         h1.innerText = `${player.first_name} ${player.last_name}`
//          p.innerText = `${player.first_name} ${player.last_name}'s Stats \n Jersey Number: ${player.number} \n age: ${player.age} \n Birth Place: ${player.birth_place} \n High School Attended: ${player.high_school} \n College Attended:  ${player.college} \n Football Position: ${player.position} \n Height: ${player.height}  inches \n Weight: ${player.weight} lbs \n Seasons Played:  ${player.experience} \n`

      
        
    
//         div.append(h1, p)
    
//         body.appendChild(div)

    
//     }

    
//     fetch(`http://localhost:3000/players/${query}`)
//     .then (response => response.json())
//     .then(createCard)


const body = document.body
const searchParams = new URLSearchParams(window.location.search)
const query  = searchParams.get("id")
   function createCard(player){
       let div_player_cards = document.querySelector(".player-card-container")
       let div_player_theCard = document.createElement("div")
       let div_player_theFront = document.createElement("div")
       let div_player_theBack = document.createElement("div")
       div_player_theCard.className = "player-theCard"
       div_player_theFront.className = "player-theFront"
       div_player_theBack.className = "player-theBack"
       
       let h1 = document.createElement("h1")
       let p = document.createElement("p")
       p.className = "player-stats"
       h1.className = "player-name"
       h1.innerHTML = `<a href="https://en.wikipedia.org/wiki/${player.first_name}_${player.last_name}">${player.first_name} ${player.last_name}</h1>`
       p.innerText = `Jersey Number: ${player.number} \n age: ${player.age} \n Birth Place: ${player.birth_place} \n High School Attended: ${player.high_school} \n College Attended:  ${player.college} \n Football Position: ${player.position} \n Height: ${player.height} inches \n Weight: ${player.weight} lbs \n Seasons Played:  ${player.experience} \n`
       div_player_theFront.appendChild(h1)
       div_player_theBack.appendChild(p)
       div_player_theCard.append(div_player_theFront, div_player_theBack)
       div_player_cards.appendChild(div_player_theCard)
   }
fetch(`http://localhost:3000/players/${query}`)
   .then (response => response.json())
   .then(createCard)