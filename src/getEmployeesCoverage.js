const { species, employees } = require('../data/zoo_data');

const validateIdAndName = (idNumber, name) =>
  employees.find(({ firstName, lastName, id }) => firstName === name
   || lastName === name
   || id === idNumber);

const animalsInfo = (animals, info) => species.reduce((filteredInfo, animal) =>
  ((animals.includes(animal.id)) ? [...filteredInfo, animal[info]] : filteredInfo), []);

const employerInfo = ({ id, firstName, lastName, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: animalsInfo(responsibleFor, 'name'),
  locations: animalsInfo(responsibleFor, 'location'),
});

const tableEmployees = () => employees.map((eachColaborator) => (employerInfo(eachColaborator)));

function getEmployeesCoverage(employer) {
  if (!employer) {
    return tableEmployees();
  }

  const { name, id } = employer;
  const getEmployer = validateIdAndName(id, name);

  if (!getEmployer) {
    throw new Error('Informações inválidas');
  }
  return employerInfo(getEmployer);
}

module.exports = getEmployeesCoverage;
