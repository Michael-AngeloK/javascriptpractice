let array0 = [20, 15, 10, 30];

let filtered = array0.filter((element) => {
  console.log(element);
  if (element <= 15) {
    return true;
  }
});

// Regular function
function convertAudtoUsd(dollars) {
  return dollars * 1.5;
}
/* Arrowfunction */
const convertUsdToAud = (dollars) => {
  return 0;
};

let people = [18, 20, 16, 15, 21];
let adult = [];

for (let i = 0; i < people.length; i++) {
  if (people[i] >= 18) {
    adult.push(people[i]);
  }
}

// 


let array3 = [1, 2, 3, 4, 5]

let newArray3 = array3.map(element => element * 2);


let array00 = [10, 20, 30, 40]

let newArray00 = array00.map((element) => {
  return element * 1.5
})




let newarray01 = array00.map(n => n * 1.5) 


