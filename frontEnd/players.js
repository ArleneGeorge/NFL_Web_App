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
       
       let h3 = document.createElement("h3")
       let p = document.createElement("p")
       let h4 = document.createElement('h4')
       p.className = "player-stats"
       h3.className = "player-name"
       h3.innerHTML = `<a href="https://en.wikipedia.org/wiki/${player.first_name}_${player.last_name}"> \n\n\n\n\n ${player.first_name} ${player.last_name}</h3>`
       h4.innerHTML = `${player.number}`
       p.innerText = `Jersey Number: ${player.number} \n age: ${player.age} \n Birth Place: ${player.birth_place} \n High School Attended: ${player.high_school} \n College Attended:  ${player.college} \n Football Position: ${player.position} \n Height: ${player.height} inches \n Weight: ${player.weight} lbs \n Seasons Played:  ${player.experience} \n`
       div_player_theFront.appendChild(h3)
      //  div_player_theFront.appendChild(h4)
       div_player_theBack.appendChild(p)
       div_player_theCard.append(div_player_theFront, div_player_theBack)
       div_player_cards.appendChild(div_player_theCard)
   }
fetch(`http://localhost:3000/players/${query}`)
   .then (response => response.json())
   .then(createCard)