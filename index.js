//PNL - CIJS - TRAN THIEN KHANH
//----------Proplem 1-----------//
function wrapHtml(users) {
  if (!Array.isArray(users)) return `Input must be array`;
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

console.log(`Proplem 1:`);
console.log(wrapHtml(users));

//----------Proplem 2-----------//
function filterGender(students) {
  if (!Array.isArray(students)) return `Input must be array`;
  return students.filter(({ gender }) => gender !== "female");
}

const students = [
  { name: "Lan", gender: "female" },
  { name: "Linh", gender: "female" },
  { name: "Trung", gender: "male" },
  { name: "Peter", gender: "other" },
];

console.log(`Proplem 2:`);
console.log(filterGender(students));

//----------Proplem 3-----------//
function groupAnagram(strs) {
  if (!Array.isArray(strs)) return `Input must be array`;
  const temp = strs.map((word) => {
    const value = word;
    const strsort = word.split("").sort().join("");
    return { sort: strsort, data: value };
  });
  const result = temp.reduce((r, item) => {
    r[item.sort] = r[item.sort] || [];
    r[item.sort].push(item.data);
    return r;
  }, {});
  return Object.values(result);
}
const t1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const t2 = [""];
const t3 = ["a"];
const t4 = "this is a string";

console.log(`Proplem 3:`);
console.log(groupAnagram(t1));

//----------Proplem 4-----------//
function findSingleNumber(arr) {
  if (!Array.isArray(arr)) return `Input must be array`;
  const counter = {};
  arr.forEach((number) => {
    counter[number] = counter[number] || 0;
    return ++counter[number];
  });
  const result = Object.keys(counter).find((key) => counter[key] === 1);
  return result;
}

const nums1 = [2, 2, 1];
const nums2 = [4, 1, 2, 1, 2];
const nums3 = [1];

console.log(`Proplem 4:`);
console.log(findSingleNumber(nums1));
