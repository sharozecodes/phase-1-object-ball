
function gameObject(){
    return{

        home: {
            teamName : "Brooklyn Nets",
            colors: ["Black" , "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1 
                },

                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },

                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },

                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },

                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
               
               
            }

        },

        away: {
            teamName : "Charlotte Hornets",
            colors: ['Turquoise', "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2 
                },

                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10                
                },

                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },

                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },

                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

// FUNCTIONS 

  function numPointsScored(playerName){
    return allPlayers()[playerName].points;
  }

  function shoeSize(playerName){
    return allPlayers()[playerName].shoe;
  }

  function teamColors(teamName){
    if(teamName === "Brooklyn Nets"){
        return gameObject().home.colors;
    } else if(teamName === "Charlotte Hornets"){
        return gameObject().away.colors;
    } else {
        return "The team does not exist"
    }
  }

  function teamNames() {
    let game = gameObject();
    let nameArr = []
    for (let gameKey in game) {
        nameArr.push(game[gameKey].teamName)
    }
    return nameArr;    
  }
  
  function playerNumbers(teamName){
    const homePlayers = gameObject().home.players;
    const awayPlayers = gameObject().away.players;  
    const jerseyNumbers = [];
    
    if(teamName === gameObject().home.teamName){
        for (let player in homePlayers){
            jerseyNumbers.push(homePlayers[player].number);
        }
    }
   
    else if(teamName === gameObject().away.teamName){
        for (let player in awayPlayers){
            jerseyNumbers.push(awayPlayers[player].number);
        }
    }

    return jerseyNumbers;
  }

  function playerStats(playerName){
    return allPlayers()[playerName];
  }

  function bigShoeRebounds(){
    let shoes = 0;
    for(let player in allPlayers()){
        if(allPlayers()[player].shoe > shoes){
            shoes = allPlayers()[player].shoe;
        }
    }

    for(let player in allPlayers()){
        if(allPlayers()[player].shoe == shoes){
            return allPlayers()[player].rebounds;
        }
    }

  }

  // BONUS QUESTIONS
  
  function mostPointsScored(){
    let score = 0;
    for(let player in allPlayers()){
        if(allPlayers()[player].points > score){
            score = allPlayers()[player].points;
        }
    }
    for(let player in allPlayers()){
        if(allPlayers()[player].points == score){
            return player;
        }
    }
  }

  function winningTeam(){
    let homeScore = 0;
    let awayScore = 0;
    const homePlayers = gameObject().home.players;
    const awayPlayers = gameObject().away.players;

    for(let player in homePlayers){
        homeScore += homePlayers[player].points;
    }
    for(let player in awayPlayers){
        awayScore += awayPlayers[player].points;
    }
    if(homeScore > awayScore){
        return gameObject().home.teamName;
    } else if( homeScore < awayScore){
        return gameObject().away.teamName;
    } else{
        return "It's a tie";
    }
  }

  function playerWithLongestName(){
    let nameLength = 0;
    for(let player in allPlayers()){
        if(player.length > nameLength){
            nameLength = player.length;
        }
    }
    for(let player in allPlayers()){
        if(player.length == nameLength){
            return player;
        }
    }
  }

// SUPER BONUS


function doesLongNameStealATon(){
    let steals = 0;
    for(let player in allPlayers()){
        if(allPlayers()[player].steals > steals){
            steals = allPlayers()[player].steals;
        }
    }

    return allPlayers()[playerWithLongestName()].steals === steals ? true : false;
  }

// HELPER FUNCTION

  function allPlayers(){
    const homePlayers = gameObject().home.players;
    const awayPlayers = gameObject().away.players;   
    return {...homePlayers, ...awayPlayers};
  }

//FUNCTION CALLS
  
//   console.log(numPointsScored("Alan Anderson"));
//   console.log(shoeSize("Ben Gordon"));
//   console.log(teamColors("Brooklyn Nets"));
//   console.log(teamNames());
//   console.log(playerNumbers("Charlotte Hornets"));
//   console.log(playerStats("Jeff Adrien"));
//   console.log(mostPointsScored());
//   console.log(winningTeam());
//   console.log(playerWithLongestName());
//   console.log(doesLongNameStealATon());
  