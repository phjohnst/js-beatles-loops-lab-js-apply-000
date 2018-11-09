// add solution here
var counter = 0;

function theBeatlesPlay(musicians, instruments) {
  var facts = [];
  for (var musician=0; musician < musicians.length; musician++) {
    var fact = musicians[musician] + " plays " + instruments[musician];
    facts.push(fact);
  } 
  return facts;
}

function johnLennonFacts(lennonFacts){
  var coolFacts = [];
  for (var fact=0; fact < lennonFacts.length; fact++) {
    var coolFact = lennonFacts[fact] + "!!!";
    coolFacts.push(coolFact);
  }
  return coolFacts;
}