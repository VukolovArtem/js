// Function (1)

function numberOutput() {
  for (let couter = 25; couter > 0; couter--) {
    console.log(couter);
  }
}


// Function (2)

function multiplesFive() {
  for (let couter = 10; couter <= 50; couter++) {
    if (couter % 5 === 0) {
      console.log(couter);
    } else {
      continue;
    }
  }
}


// Function (3)

function sumOfNumbers(){
  let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
      console.log(i);
    }
    console.log(sum);
}


// Function (4)

function solveExample() {
  let resolve = 2 + 2 * 2;
  do {
    answer = +prompt("Реши пример (2 + 2 * 2 = ___ )");
    console.log(answer);
  } while (answer != resolve);
  console.log(answer);
  console.log(answer + " = ПРАВИЛЬНО");
}
