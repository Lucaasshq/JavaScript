var person1 = {
  name: "Lucas",
  age: 21,
}

var person2 = {
  name: "Daniel",
  age:25
}

var person3 = {
  name: "Rafa",
  age:36
}

var list = [person1, person2, person3]

// console.log(list);

// console.log(list[1]);

for (const i of list) {
  console.log(i.name);
}