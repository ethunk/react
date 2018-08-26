removeWithoutCopy = (arr, item) => {
  let index = arr.indexOf(item);
  while (index >= 0) {
    arr.splice(index, 1);
    index = arr.indexOf(item);
  }
    return arr;
};

append = (arr, item) => {
  arr.push(item);
  return(arr);
};

truncate = (arr) => {
  arr.pop();
  return(arr);
};

prepend = (arr, item) => {

};

curtail = (arr) => {

};

concat = (arr1, arr2) => {

};

insert = (arr, item, index) => {

};

count = (arr, item) => {

};

duplicates = (arr) => {

};

square = (arr) => {

};

findAllOccurrences = (arr, item) => {

};
