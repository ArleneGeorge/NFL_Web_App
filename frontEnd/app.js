
const body = document.body

let allNFLTeams = []

function retrieveTeams(){
    fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(team_data => allNFLTeams.push(team_data))
    .then(all => teamCards(allNFLTeams.flat())) 
}

function teamCards(teams){

    let div = document.querySelector('.cards')
    div.innerHTML = ""

    teams.forEach(team => {
        let newCard = document.createElement('div')
        newCard.className = 'team'
       

        newCard.innerHTML = `<a href = 'teams.html?id=${team.id}'\n>${team.name}</a> <img src = ${team.logo}>`;

        div.append(newCard)
        

    })
}

const allFilter = document.getElementById('all')

allFilter.addEventListener('click', () => {
    const allConference = allNFLTeams.flat().filter(team =>{
        return team
    })
    teamCards(allConference)
  })
  


const nfcFilter = document.getElementById('nfc')

nfcFilter.addEventListener('click', () => {
  const nfcConference = allNFLTeams.flat().filter(team => {
    return team.conference === "NFC"    
  })
  teamCards(nfcConference)
})


const afcFilter = document.getElementById('afc')

afcFilter.addEventListener('click', () => {
  const afcConference = allNFLTeams.flat().filter(team => {
    return team.conference === "AFC"    
  })
  teamCards(afcConference)
})

retrieveTeams()