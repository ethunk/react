function duplicateCount(text){
  let holder = [];
  let arrayText = text.split("");
  arrayText.forEach (function(element) {
    if (!holder.includes(element)) {
      holder.push(element);
    }
  });
  return holder;
}
