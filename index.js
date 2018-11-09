// add solution here
var facts = [];
    counter = 0;

function theBeatlesPlay(musicians, instruments) {
  facts = [];
  for (var musician=0; musician < musicians.length; musician++) {
    var fact = musicians[musician] + " plays " + instruments[musician];
    facts.push(fact);
  } 
  return facts;
}

