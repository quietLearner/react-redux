let person = {
  name: "bob",
  address: {
    country: "ca",
    city: "toronto",
  },
};
let updated = Object.assign({}, person, { age: 30 }); // creat a new object shadow copy

console.log("person ", person);
console.log("updated ", updated);

let updated1 = { ...person, age: 30 }; // another way  shadow copy
updated1.address.city = "new york"; // it also change person and updated city
console.log("updated1 ", updated1);

//deep copy
let person1 = {
  name: "bob",
  address: {
    country: "ca",
    city: "toronto",
  },
};

let person1_deep_updated = {
  ...person1,
  address: { ...person1.address, city: "shanghai" },
  age: 40,
};

console.log("person1 ", person1);
console.log("person1_deep_updated ", person1_deep_updated);

const numbers = [1, 2, 3];

const index = numbers.indexOf(2);
//const added = [0, ...numbers, 5];
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log("added, ", added);

const removed = numbers.filter((n) => n !== 2);
console.log("removed, ", removed);

const updated1 = numbers.map((n) => (n === 2 ? 20 : n));
console.log("updated, ", updated1);
