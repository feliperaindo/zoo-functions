const data = require('../data/zoo_data');

const { hours, species } = data;
const weekDays = Object.keys(hours);

const checkAnimal = (parameter) => species.find((animal) => animal.name === parameter);

const arrayConstructorAnimals = (weekDay) => species.reduce((animaisArray, eachAnimal) => {
  if (eachAnimal.availability.includes(weekDay)) {
    animaisArray.push(eachAnimal.name);
  }
  return animaisArray;
}, []);

function tableSchedule(filterDays) {
  const table = {};
  filterDays.forEach((weekDay) => {
    const { open, close } = hours[weekDay];
    table[weekDay] = {};
    if (weekDay === 'Monday') {
      table[weekDay].officeHour = 'CLOSED';
      table[weekDay].exhibition = 'The zoo will be closed!';
    } else {
      table[weekDay].officeHour = `Open from ${open}am until ${close}pm`;
      table[weekDay].exhibition = arrayConstructorAnimals(weekDay);
    }
  });
  return table;
}

function filterDayOrAnimal(string, animalResult, dayResult) {
  const test = dayResult ? tableSchedule([string]) : animalResult.availability;
  return test;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return tableSchedule(weekDays);
  }

  const animal = checkAnimal(scheduleTarget);
  const day = weekDays.includes(scheduleTarget);

  if (!animal && !day) {
    return tableSchedule(weekDays);
  }
  return filterDayOrAnimal(scheduleTarget, animal, day);
}

module.exports = getSchedule;
