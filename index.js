// add solution here
var facts = [];
    counter = 0;

function theBeatlesPlay(musicians, instruments) {
  facts = [];
  for (var musician in musicians) {
    for (var instrument in instruments) {
      var fact = "${musician}" + " plays " + "${instrument}" ; 
      facts.push(fact);  
    }
  } return facts
}