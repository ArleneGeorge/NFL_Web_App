const body = document.body

let allNFLPlayers = []

function retrievePlayers(){
    fetch('http://localhost:3000/players')
        .then (response => response.json())
        .then(player_data => allNFLPlayers.push(player_data)) 
        .then(all => eachPlayerCard(allNFLPlayers.flat()))
    
    }

function eachPlayerCard(players){

    let div = document.querySelector('.cards')
    div.innerHTML = ""

    // let div = document.createElement('div')
    // div.className = "cards"


    players.forEach(player => {
        let createCards = document.createElement('div')
        createCards.className = 'playerNameCard'
       

        createCards.innerHTML = `<a href = 'players.html?id=${player.id}'\n>${player.first_name} ${player.last_name}</a>`;

        

        div.append(createCards)

    })

    

    body.appendChild(div)
}



const allFilter = document.getElementById('all')

allFilter.addEventListener('click', () => {
    const allPlayers = allNFLPlayers.flat().filter(player =>{
        return player
    })
    eachPlayerCard(allPlayers)
  })


const qbFilter = document.getElementById('qb')

qbFilter.addEventListener('click', () => {
  const qbPosition = allNFLPlayers.flat().filter(player => {
    return player.position === "QB"    
  })
  eachPlayerCard(qbPosition)
})

const rbFilter = document.getElementById('rb')

rbFilter.addEventListener('click', () => {
  const rbPosition = allNFLPlayers.flat().filter(player => {
    return player.position === "RB"    
  })
  eachPlayerCard(rbPosition)
})

const teFilter = document.getElementById('te')

teFilter.addEventListener('click', () => {
    const tePosition = allNFLPlayers.flat().filter(player => {
      return player.position === "TE"    
    })
    eachPlayerCard(tePosition)
  })

  const wrFilter = document.getElementById('wr')

    wrFilter.addEventListener('click', () => {
        const wrPosition = allNFLPlayers.flat().filter(player => {
        return player.position === "WR"    
        })
        eachPlayerCard(wrPosition)
  })

const kFilter = document.getElementById('kicker')

  kFilter.addEventListener('click', () => {
    const kPosition = allNFLPlayers.flat().filter(player => {
    return player.position === "K"    
    })
    eachPlayerCard(kPosition)
})
    


retrievePlayers()