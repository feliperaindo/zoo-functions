const data = require('../data/zoo_data');

const { hours } = data;
const weekDays = Object.keys(hours);

const checkAnimal = (parameter) => data.species.find((animal) => animal.name === parameter);

const arrayConstructorAnimals = (weekDay) => {
  const animals = data.species.reduce((animaisArray, eachAnimal) => {
    if (eachAnimal.availability.includes(weekDay)) {
      animaisArray.push(eachAnimal.name);
    }
    return animaisArray;
  }, []);
  return animals;
};

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
  if (dayResult) {
    return tableSchedule([string]);
  }
  return animalResult.availability;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return tableSchedule(weekDays);
  }

  const animal = checkAnimal(scheduleTarget);
  const day = weekDays.includes(scheduleTarget);

  if (animal === undefined && day === false) {
    return tableSchedule(weekDays);
  }
  return filterDayOrAnimal(scheduleTarget, animal, day);
}

module.exports = getSchedule;
