var numberHits = 0;
var playerReserve = 5;
var dragonReserve = 10;
var dragonDamage = 0;
var playerDamage = 0;

numberHits = prompt("Plase enter number of hits.");
numberHits = Number(numberHits);

for (i=0; i<numberHits; i++){
  // generate random damage for dragon between 1 and 2
  dragonDamage = Math.ceil(Math.random() * 2);
  // subtrack dragon damage from player reserve
  playerReserve = playerReserve - dragonDamage;
  // check to see if player is defeated
  if (playerReserve <=0){
      // if the player is defeated then alert a message and leave loop
      alert("dragon has won");
      break;
      }
  // generate random damage for player
  
  // subtract player damage from dragon reserve
  
  // check to see if dragon is dead
  if (){
      // if the dragon is defeated then alert a message and leave loop
      
      }
}

// check to see if the battle was a tie
if (){
    // alert the user that the battle was a tie
    
    }






// Task: Take the application that you built from For/While Pseudocode assignment and build it using HTML and JavaScript. Submit this as a webpage as a GitHub Pages URL

// Submission: a GitHub Pages link of the above application -->