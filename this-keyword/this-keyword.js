// Example use :
// 
// sport.playerNames();
// returns ["Serena Williams plays tennis", "Margaret Court plays tennis"]

var sport = {
  name: 'tennis',
  players: [
    { name: 'Serena Williams', age: 37 },
    { name: 'Margaret Court', age: 76 }
  ],
  playerNames: function () {
    // Fix me - FIXED
    return this.players.map(function(player) {
      return player.name + ' plays ' + sport.name;
    });
  }
};


// Example use: 
// eighthFloorCounselor.say('Unicornado!');
var eighthFloorCounselor = {
  name: 'Rebecca',
  say: function(phrase) {
    return this.name + ' says: ' + phrase;
  }
};

// Write a function, someoneSays, that takes a string
// as input and calls the eightFloorCounselor say method
// to return the phrase that person says




var someoneSays = function (someone, catchPhrase) {

  //new answer
  //Example use of sixthFloor Counselor is used for testing, not in the actual function
  //return a function similar to 8thFloorCouselor.say -> return this.name + 'says" + phrase'
  return someone.name + ' says: ' + catchPhrase;


  //old answer
  // var sixthFloorCounselor = {
  //   name: 'Liz'
  // };
  //return this.name
};

// Example use:
// var sixthFloorCounselor = {
//   name: 'Liz'
// };
// someoneSays(sixthFloorCounselor, 'blammo!') // returns Liz says: blammo!

