/* Description from ChatGPT:
Here is a moderately challenging problem for you to solve using JavaScript:

Implement a function called groupBy that takes an array of objects and a property name, and returns an object 
that groups the objects by the specified property.

For example, given the following array of objects:

const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 35 },
  { name: "Eve", age: 21 }
];

And the following call to your groupBy function:

const groups = groupBy(people, "age");
The groups variable should be an object with the following structure:


{
  21: [
    { name: "Alice", age: 21 },
    { name: "Eve", age: 21 }
  ],
  25: [
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 25 }
  ],
  35: [
    { name: "David", age: 35 }
  ]
}

Each property of the groups object should represent a group of objects with the same value for the specified property. The property name should be the value of the property, and the value of the property should be an array of objects that have that property value.

Here is the full function signature:

function groupBy(arr, prop) {
  // your code here
}
Good luck! */



Solution:
function groupBy(people) {

  /* early attemp without help */
  // people = people.sort((a,b)=> a.age - b.age)

  // for(let person of people){
  //   console.log(`${person.age}: { name: '${person.name}', age: ${person.age} }`)
  // }

/* solution */

return people.reduce((acc,obj)=> {
  var key = obj.age
  if(!acc[key]) acc[key] = []

  acc[key].push(obj)

  return acc
}, {})

}

console.log(groupBy(people))

