const createPerson = (name, age) => {
  let persons = {
    name: name,
    age: age
  };
  return persons;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return Object.hasOwn(object, property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(people => people.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  let getAverage = people.reduce((prevAge, curr) => prevAge + curr.age, 0);
  return getAverage / people.length;

};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: otherPersonsName => {
      return `Hi ${otherPersonsName}, my name is ${name} and I am ${age}!`;
    }
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
