function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1){array.push(`I am ${i} strange loop.`)}
    else {array.push(`I am ${i} strange loops.`)} 
  }
  return array 
}

function whileLoop(Number) {
  let countdown = (Number) 
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done"
}

function doWhileLoop(num) {
  do {
  function incrementVariable() {
    num = num + 1;
    return num;
  }
    console.log("I run once regardless.")
  } while (incrementVariable() < num )
  
}
