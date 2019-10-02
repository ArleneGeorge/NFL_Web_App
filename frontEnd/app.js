const body = document.body

function teamCards(teams){

    let div = document.createElement('div')
    div.className = "cards"


    teams.forEach(team => {
        let createCards = document.createElement('div')
        createCards.className = 'team'
        let a = document.createElement('a')
        let img = document.createElement('img')
       

        createCards.innerHTML = `<a href = 'teams.html?id=${team.id}'>${team.name}</a> <img src = ${team.logo}>`;

        

        div.append(createCards)
    })
    body.appendChild(div)
}







fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(teamCards)