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
  while (fact < lennonFacts.length) {
    var coolFact = lennonFacts[fact] + "!!!";
    coolFacts.push(coolFact);
    fact++
  }
  return coolFacts;
}