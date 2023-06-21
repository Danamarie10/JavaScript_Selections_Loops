console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let number = 1; number <= 100; number++) {
    if (number % 2 !== 0 ) {
        console.log(number);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let number = 1; number <= 100; number ++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 === 0){
        console.log("Fizz"); 
            
        } 
        else if (number % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(number);
        }
    }

   console.log("EXERCISE 3: \n==========\n") 

   let number = 1;

   while (number <= 100) {
    if (number % 2 !== 0 ) {
        console.log(number)
    }
    number++;
   }

   while (number <= 100) {
    if (number % 3 === 0 && number % 5 === 0 ){
        console.log("FizzBuzz");
    } else if (number % 3 === 0 ) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz"); 
    } else {
        console.log(number);
    }
    number++;
   }
   console.log("EXERCISE 4: \n==========\n") 
   let value = Math.round(Math.random() * 500); 
   let n = Math.round(Math.random() * (500 - 100) + 100);

   for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found Value!");
        break;
    }
   }
   console.log("Did not find value");

   console.log("EXERCISE 5: \n==========\n")

    let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let n1 = Math.round(Math.random() * (1000 - 1) + 1);
    let start = Math.round(Math.random() * (10 - 1) + 1);

    for (let i = start; i <= n1; i++) {
        if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
          console.log("FIZZBUZZ");
        } else if (i % fizzDivisor === 0) {
          console.log("FIZZ");
        } else if (i % buzzDivisor === 0) {
          console.log("BUZZ");
        } else {
          console.log(i);
        }
      }