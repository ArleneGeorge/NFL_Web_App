const body = document.body

function eachPlayerCard(players){

    let div = document.createElement('div')
    div.className = "cards"


    players.forEach(player => {
        let createCards = document.createElement('div')
        createCards.className = 'playerNameCard'
       

        createCards.innerHTML = `<a href = 'players.html?id=${player.id}'\n>${player.first_name} ${player.last_name}</a>`;

        

        div.append(createCards)

    })

    

    body.appendChild(div)
}






fetch('http://localhost:3000/players')
    .then(response => response.json())
    .then(eachPlayerCard)