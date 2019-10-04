
const body = document.body

fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(teamCards)
function teamCards(teams){
    let div_allCards = document.querySelector('.allCards')
    teams.forEach(team => {
        let div_theCard = document.createElement('div')
        let div_theFront = document.createElement('div')
        let div_theBack = document.createElement('div')

        div_theCard.className = "theCard"
        div_theFront.className = "theFront"
        div_theBack.className = "theBack"

        let p_theFront = document.createElement('p')


        p_theFront.innerText = team.name 

        team.budgets.forEach(budget => {
            let canvas_myChart = document.createElement('canvas');
            canvas_myChart.className = "myChart";
            canvas_myChart.getContext('2d');
            
            //Global Options 
                Chart.defaults.global.defaultFontFamily = 'lato'; 
                Chart.defaults.global.defaultFontFamily = 18;
                Chart.defaults.global.defaultFontFamily = '#777';
                let myChart = new Chart(canvas_myChart, {
                    type:'bar', //bar, horizontal bar, pie, line, donut, radar, polarArea
                    data:{
                        labels:["number_of_players",  "quarterback", "running_back", "wide_reciever", 
                                "tight_end", "offensive_lineman", "defensive_lineman", "linebacker", 
                                "defensive_back", "kicker", "total_budget_spent"],
                        datasets:[{
                            label:'Team Budget', 
                            data:[
                                `${budget.number_of_players}`, 
                                `${budget.quarterback}`,
                                `${budget.running_back}`,
                                `${budget.wide_reciever}`,
                                `${budget.tight_end}`,
                                `${budget.offensive_lineman}`,
                                `${budget.defensive_lineman}`,
                                `${budget.linebacker}`,
                                `${budget.defensive_back}`,
                                `${budget.kicker}`,
                                `${budget.total_budget_spent}`
                            ],
                            // backgroundColor: 'green'
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6', 
                                'rgba(54, 206, 86, 0.6', 
                                'rgba(76, 192, 192,0.6', 
                                'rgba(53, 102, 255, 0.6', 
                                'rgba(255, 99, 64, 0.6' 
                            ],
                            borderWidth: 1, 
                            borderColor: '#777',
                            hoverBorderWidth: 3, 
                            hoverBorderColor: 'red'
                        }]
                    }, 
                    option: {
                        title:{
                            display:true, 
                            text: 'Largest Cities in Massachussetts',
                            fontSize: 25
                        },
                        legend:{
                            display: true, 
                            position: 'right',
                            labels: {
                                fontColor: 'black'
                            }
                        },
                        layout:{
                            padding:{
                                left: 50, 
                                right: 0, 
                                bottom: 0, 
                                top: 0
                            }
                        },
                        tooltips: {
                            display: true
                        }
                    }
                })
            div_theBack.appendChild(canvas_myChart)
            div_allCards.appendChild(div_theCard)
        })
        div_theFront.appendChild(p_theFront)
        div_theCard.append(div_theFront, div_theBack)
    })
}
