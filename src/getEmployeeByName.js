const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const getEmployer = data.employees.find(({ firstName, lastName }) => firstName === employeeName
  || lastName === employeeName);
  return (!getEmployer) ? {} : getEmployer;
}

module.exports = getEmployeeByName;
