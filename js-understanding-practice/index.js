// Hour 
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 19;
if (hour >= 6 && hour <= 12) {
   console.log("Good Morning!")
} else if (hour >= 12 && hour <= 18) {
  console.log("Good Afternoon!")
} else console.log("Good Evening!")