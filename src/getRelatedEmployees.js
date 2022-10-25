const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) =>
  managers.some((idNumber) => idNumber === id));

const createArray = (managerId) =>
  employees.reduce((menagedPeople, { managers, firstName, lastName }) =>
    ((managers.includes(managerId))
      ? [...menagedPeople, `${firstName} ${lastName}`]
      : menagedPeople), []);

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return createArray(managerId);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
