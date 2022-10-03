const data = require('../data/zoo_data');

const { species, employees } = data;

const validateIdAndName = (idNumber, name) =>
  employees.find((eachColaborator) => eachColaborator.firstName === name
   || eachColaborator.lastName === name
   || eachColaborator.id === idNumber);

const animalsInfo = (animals, info) => species.reduce((filteredInfo, animal) => {
  if (animals.includes(animal.id)) {
    filteredInfo.push(animal[info]);
  }
  return filteredInfo;
}, []);

const employerInfo = ({ id, firstName, lastName, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: animalsInfo(responsibleFor, 'name'),
  locations: animalsInfo(responsibleFor, 'location'),
});

const tableEmployees = () => employees.map((eachColaborator) => (employerInfo(eachColaborator)));

function getEmployeesCoverage(employer) {
  if (employer === undefined) {
    return tableEmployees();
  }

  const { name, id } = employer;
  const getEmployer = validateIdAndName(id, name);

  if (getEmployer === undefined) {
    throw new Error('Informações inválidas');
  }
  return employerInfo(getEmployer);
}

module.exports = getEmployeesCoverage;
