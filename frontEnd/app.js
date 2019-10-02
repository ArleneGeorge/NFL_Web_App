const body = document.body

function createCards(teams){
    let div = document.createElement('div')
    div.className = "cards"


    teams.forEach(team => {
        let a = document.createElement('a')
        let img = document.createElement('img')
       

        a.innerText = `\n\n${team.name} \n`
        a.href = `teams.html?id=${team.id}`
        img.src = team.logo

        

        div.append(a, img)
    })
    body.appendChild(div)
}







fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(createCards)