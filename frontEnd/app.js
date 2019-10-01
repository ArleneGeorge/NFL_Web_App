const body = document.body

function createCards(teams){
    let div = document.createElement('div')
    div.className = "cards"


    teams.forEach(team => {
        let a = document.createElement('a')

        a.innerText = `${team.name} \n \n`
        a.href = `teams.html?id=${team.id}`

        div.append(a)
    })
    body.appendChild(div)
}

function playersInfo(players){
    let div = document.createElement('div')
    div.className = "cards"


    players.forEach(player => {
        let a = document.createElement('a')

        a.innerText = `${player.name} \n \n`
        a.href = `players.html?id=${player.id}`

        div.append(a)
    })
    body.appendChild(div)
}







fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(createCards)

    fetch('http://localhost:3000/players')
    .then(response => response.json())
    .then(playersInfo)