// Developer: Alex Ridgeley
// Date: 13 May 2022
// Full Stack Development QAP 1

// Import required modules
const prompt = require("prompt-sync")({ sigint: true }); // This imports the prompt-sync module. It is used for obtaining user inputs directly from the console
const _ = require("lodash"); // Lodash helps with simplifying JS code - it helps to streamline code that would otherwise look messy. The '_' is the standard naming convention
var validator = require("validator"); // Useful for validating inputs from prompt, as well as other variables
const { EventEmitter } = require("events");
const emitter = new EventEmitter();

emitter.on("close", () => {
  console.log();
  console.log("Thank you for using the program. Returning to main menu...");
  setTimeout(() => {
    mainMenu();
  }, 2000);
});

// Simple guessing game
const guessingGame = () => {
  // Initilize starting variables
  let number = _.random(1, 50); // Lodash generates a random number between 1 and 50
  var guess = 0;
  var counter = 0; // This will be used to track the number of guesses

  console.log("\n    GUESSING GAME    ");
  console.log("---------------------\n");

  console.log("Lodash has chosen its number. Now it is up to you to guess it.");
  console.log(
    "Feel free to try and break the game. Go ahead. Test my validations."
  );

  // This loop will repeat until the correct number has been guessed
  while (guess != number) {
    console.log(`Attempts: ${counter}`);
    var guess = prompt("Enter a number between 1 and 50: ");

    // If the user fails to enter a number between 1 and 50, they will be caught in this validation loop
    while (!validator.isInt(guess, { min: 1, max: 50 })) {
      console.log(
        "Validator has determined that your entry was invalid. Please enter a number between 1 and 50."
      );
      console.log(`Attempts: ${counter}`);
      var guess = prompt("Enter a number: ");
    }
    counter++; // Increment guess counter by 1 each time a guess is made

    console.log();

    // This bit checks to see if the number is incorrect. If it is, then the system will tell the user if they are too high or too low
    if (guess != number) {
      console.log(
        `${
          guess > number
            ? "You need to guess lower."
            : "You need to guess higher."
        }`
      );
    }
  }

  console.log(
    `You are correct! The number was ${number}, and it took you ${counter} tries. ${
      counter < 7 ? "Well done." : "You should have tried harder."
    }`
  );
  emitter.emit("close");
};

const listManagement = () => {
  // Uses Lodash to manage lists
  console.log("\n --- Working with lists ---\n");
  // Using an event emitter here, mostly for to help minimize console spam, but also for practice
  emitter.on("wait", () => {
    console.log();
    prompt("When you're ready to continue, press enter.");
  });

  // Here is our starting list. It's a collection of users
  var users = [
    { name: "Alex Ridgeley", age: 30, city: "St. John's", active: true },
    { name: "John Smith", age: 22, city: "Marystown", active: false },
    { name: "Michael Moggy", age: 31, city: "St. John's", active: true },
    { name: "Jess Doobs", age: 29, city: "Townton", active: true },
    { name: "Henry von Teabag", age: 19, city: "Frontier", active: false },
    { name: "Richard von Teabag", age: 40, city: "Frontier", active: true },
  ];
  console.log("Here is our starting array:");
  users.forEach((user) => {
    console.log(user);
  });

  emitter.emit("wait");
  // We can use Lodash to sort arrays of objects by different categories, and in different orders
  console.log("\nUsing lodash, we can sort this array by age, like so:");

  var orderByAge = _.orderBy(users, ["age"], ["asc"]);
  orderByAge.forEach((user) => {
    console.log(user);
  });

  emitter.emit("wait");
  // We can also use lodash to filter lists by certain criteria - doing it this way returns an array
  console.log(
    "\nWe can also use lodash to filter lists by certain criteria, like here, where we are only showing users with the active state set to 'true':"
  );

  var onlyActive = _.partition(orderByAge, (o) => {
    return o.active;
  });

  console.log(onlyActive[0]);
  console.log();
  console.log(
    "Note that the earlier sort method (age) is still in effect. I filtered the sorted list, not the original list."
  );

  emitter.emit("close");
};

const mainMenu = () => {
  // A simple menu for the NPM functions - not really necessary but nice to have.
  console.log("\n--- QAP 1 MAIN MENU ---\n");
  console.log("1. Play a simple guessing game!");
  console.log(
    "2. See some light examples of how lodash can be used to manipulate lists!"
  );
  console.log("3. Quit");
  const menuSelect = () => {
    console.log();
    const choice = validator.toInt(prompt("Choose an activity: ")); // The validator here simply converts the answer to an int
    switch (choice) {
      case 1:
        guessingGame();
        break;
      case 2:
        listManagement();
        break;
      case 3:
        console.log("Thank you for using the program.\n");
        return;
      default:
        console.log("Invalid choice. Please enter either 1, 2 or 3.");
        menuSelect();
    }
  };
  menuSelect();
};

mainMenu();
