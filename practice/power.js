let power_old = function(base, exponent) {
  let answer = 1;
  for (let count = 0; count <exponent; count++) {
    answer *= base;
  }
  return answer;
};

power_old(2,8);


let power_new = (base, exponent) => {
  let answer = 1;
  for(let count = 0; count <exponent; count++) {
    answer *= base;
  }
  return answer;

};
