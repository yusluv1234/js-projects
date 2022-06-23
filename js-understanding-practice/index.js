// Hour 
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 19;
if (hour >= 6 && hour <= 12) 
   console.log("Good Morning!")
 else if (hour >= 12 && hour <= 18) 
  console.log("Good Afternoon!")
 else
 console.log("Good Evening!")

let role;
switch(role) {
  case 'guest':
  console.log('Guest User')
  break;
  case 'moderator':
    console.log('Moderator User')
    break;
    default:
      console.log('Unknown User')
}

// Using If and Else for this switch and case
if (role === 'moderator')
  console.log('Moderator User');
else if (role === 'guest')
  console.log('Guest User');
  else console.log('Unknown User')

// LOOPS for, while, Do...while, for...in, for...of
// for (initialExpression, condition, increment)

for Loop
for (let i = 1; i <= 5; i++) {
  console.log('Hello World', i)
}

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i) // if it's !== that's Odd number but If == that's Even Number
}

while loop
let i = 1;
while(i <= 100) {
  if (i % 2 !== 0) console.log(i);
  i++
}

do-while loop
let i = 0
do {
  i++
} while(i < 5)

For In Loop
const person = {
  name: 'Jolayemi', age: 24,
};

for (let key in person)
console.log(key, person[key])

const colors = ['red', 'green', 'blue']
for (let index in colors)
  console.log(index, colors[index]);

const colors = ['red', 'green', 'blue']
for (let color of colors)
  console.log(color)

Function that declare Max number
  let number = max(10, 9)
  console.log(number)

  function max(a, b) {
    return (a > b) ? a : b;
  }
  console.log(isLandscape(50, 90))

  function isLandscape(width, height) {
    return (width > height);
  }

  const output = fizzBuzz(7);
  console.log(output);

  function fizzBuzz(input) {
    if (typeof input !== 'number')
    return NaN;
    if ((input % 3 === 0) && (input % 5 === 0))
    return "FizzBuzz";
    if (input % 3 === 0)
    return "Fizz";
    if (input % 5 === 0)
    return "Buzz";

  return input;

  }

  checkSpeed(180);

  function checkSpeed(speed) {
    if (speed >= 60 && speed < 75) 
    console.log("Okay");
    else if (speed >= 75 && speed < 100)
    console.log('1 Point')
    else if (speed >= 100 && speed <= 180)
    console.log("Suspend License")
    else
    console.log(speed)

  checkSpeed(130);
  
  function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
    console.log('Okay');
    else {
      const points = Math.floor((speed - speedLimit) / kmPerPoint);
      if(points >= 12)
      console.log('License suspended');
      else
      // console.log('Points', points);
    }
  }