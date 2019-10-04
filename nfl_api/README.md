
<h1> Getting Started </h1>

1. After cloning down the repository,type `cd nfl_api` into the terminal. This will get you into the Back-End 
of the project which is built with Ruby on Rails. 
2. Enter `rails db:migrate` into the terminal to create the tables needed for this web application.
3. Enter `rails db:seed` into the terminal to put the data into the newly created tables This may take a 
few minutes. 
4.  Enter `bundle install` into the terminal to make sure all necessary gems for running the web application 
are installed.
5. Enter `rails s` into the terminal to start the server for the Back-End. This will allow the Front-End to access the data in the tables. 
6. You will now need to get into the Front-End by typing `cd frontEnd` into the terminal. 
7. Enter `lite-server` to start the front end. Your browser should come up with the home page. 



<h1> Navigating Through the Application </h1>

The home page lists all 32 NFL Teams when it starts up.You can filter to the AFC or NFC teams by clicking the AFC or NFC text just below the header. 

![alternativetext](readme_pics/filterHomePage.png)

If you click on one of the team names you will be taken to the team page that lists the players for the team.You can also click on the Team Budget in the header to see a breakdown on how much the team spent on each position. 

If you choose one of the players you will be shown a card that flipswhen you hover to show information about the player. 

The budgets button in the header will show you all of the team nameson cards.If you hover over a team card it will flip to show a graph of the team budget allocations. 

The Players button on the header will take you to a list of all NFL players.The position text just below the header allows you to filter the players by position.If you click on a player name you will be taken to the players flip card. 

![alternativetext](readme_pics/filterPlayersPage.png)


Built by Arlene George and Benjamin Huy Pham 