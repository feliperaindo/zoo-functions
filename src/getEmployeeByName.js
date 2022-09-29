const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const getEmployer = data.employees.find((name) => name.firstName === employeeName
  || name.lastName === employeeName);
  return (getEmployer === undefined) ? {} : getEmployer;
}

module.exports = getEmployeeByName;
