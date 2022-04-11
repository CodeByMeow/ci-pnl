//----------Proplem 1-----------//
function wrapHtml(users) {
  return users.map(
    ({ name, age }) => `<div><h1>${name}</h1><h2>${age}</h2></div>`
  );
}

const users = [
  { name: "Angelina Jolie", age: 8 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

// console.log(wrapHtml(users));

//----------Proplem 2-----------//
function filterGender(students) {
  return students.filter(({ gender }) => gender !== "female");
}

const students = [
  { name: "Lan", gender: "female" },
  { name: "Linh", gender: "female" },
  { name: "Trung", gender: "male" },
  { name: "Peter", gender: "other" },
];

// console.log(filterGender(students));

//----------Proplem 3-----------//
function groupAnagram(strs) {
  if (!Array.isArray(strs)) return `Wrong input`;
  const temp = strs.map(word => {
    //TODO: working here
  }
}
strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(strs));
