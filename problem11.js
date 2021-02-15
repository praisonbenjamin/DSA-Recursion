// rite a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.


let sampleOrg = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: ['Steve', 'Kyle', 'Andra'],
    },
  },
};
  
function printOrg(org, orgChart = []) {
  let nextLevel = Object.values(org)[0];
  
  if (typeof nextLevel === 'string') {
    return;
  }
  
  let currentKey = Object.keys(org)[0];
  
  orgChart.push(currentKey);
  
  if (nextLevel.length > 1) {
    nextLevel.forEach((value) => orgChart.push(value));
  }
  
  return printOrg(nextLevel, orgChart);
}
  
console.log(printOrg(sampleOrg));