const { hours, species } = require('../data/zoo_data');

const weekDays = Object.keys(hours);

const checkAnimal = (parameter) => species.find(({ name }) => name === parameter);

const arrayConstructorAnimals = (weekDay) => species.reduce((animals, { availability, name }) =>
  ((availability.includes(weekDay)) ? [...animals, name] : animals), []);

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

const filterDayOrAnimal = (string, animalResult, dayResult) =>
  (dayResult ? tableSchedule([string]) : animalResult.availability);

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return tableSchedule(weekDays);
  }

  const animal = checkAnimal(scheduleTarget);
  const day = weekDays.includes(scheduleTarget);

  return (!animal && !day)
    ? tableSchedule(weekDays)
    : filterDayOrAnimal(scheduleTarget, animal, day);
}

module.exports = getSchedule;
