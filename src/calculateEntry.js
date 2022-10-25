const { prices: { adult, senior, child } } = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitors = { adult: 0, child: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    switch (true) {
    case age < 18:
      visitors.child += 1;
      break;
    case age >= 50:
      visitors.senior += 1;
      break;
    default:
      visitors.adult += 1;
      break;
    }
  });
  return visitors;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult: visitAdult, child: visitChild, senior: visitSenior } = countEntrants(entrants);
  return (adult * visitAdult) + (child * visitChild) + (senior * visitSenior);
}

module.exports = { calculateEntry, countEntrants };
