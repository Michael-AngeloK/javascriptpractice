let array = [20, 15, 10, 30];

let filtered = array.filter((element) => {
  console.log(element);
  if (element <= 15) {
    return true;
  }
});

console.log(filteredArray);
