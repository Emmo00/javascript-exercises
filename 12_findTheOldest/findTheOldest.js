const findTheOldest = function (people) {
  console.log(people);
  let ages = people.map(
    (person) =>
      (person.yearOfDeath || new Date().getFullYear()) -
      (person.yearOfBirth)
  );
  return people[ages.indexOf(Math.max(...ages))];
};

// Do not edit below this line
module.exports = findTheOldest;
