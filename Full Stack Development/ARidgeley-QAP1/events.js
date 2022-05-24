// Global Module: Events
// -----------------------
// The events module can be used to create, listen for, and fire (activate) your own events.

// Import required modules
const EventEmitter = require("events");
const emitter = new EventEmitter();

// This is created so that you can run the file direcly and see some results. The actual class component is built to be used with the http file
const eventDemo = () => {
  console.log();
  console.log("Event Module");
  console.log("------------");
  console.log();

  console.log(
    "Two event listeners are created here. One for 'logging in', and another for 'math'."
  );
  console.log();

  // This is the event listener, and it is now listening for an event emitter with the text "logging" passed through
  emitter.on("logging", (e) => {
    console.log("------ event starts here ------");
    console.log("Logging in....");
    console.log();
    console.log(e.message);
    console.log("------ event ends here ------\n");
  });

  emitter.on("math", () => {
    console.log("------ event starts here ------");
    // Create some random numbers for use in the math event
    var a = Math.floor(Math.random() * 100);
    var b = Math.floor(Math.random() * 100);
    console.log(
      `What's ${a} + ${b}? Really, you need a computer to do that for you?`
    );
    console.log();
    console.log(`Fine. It's ${a + b}. Happy?`);
    console.log("------ event ends here ------\n");
  });

  // This is just some random stuff to show that other things can happen without the event firing off
  setTimeout(() => {
    console.log(
      "Now, we'll do some other things to show that we can call the event whenever we want."
    );
    console.log("I am useless. No listener here.");

    console.log();
  }, 2000);

  // Now, let's call the math event. We could call this as many times as we want, based on what is happening
  setTimeout(() => {
    console.log("The math listener will be called here. EMITTER, GO!");
    emitter.emit("math");
  }, 5000);

  setTimeout(() => {
    console.log("More random, non-event-related crap.");
    console.log();
  }, 8000);

  setTimeout(() => {
    console.log("Now, let's call the login event:");
    emitter.emit("logging", { message: "I have logged in. I am amazing." });
  }, 11000);

  // And here is the event emitter - it references "logging", and because the listener is active, the associated function will run
  setTimeout(() => {
    console.log(
      "Two events called at different time. These can be called whenever they are needed!"
    );
    console.log("End of demonstration.\n");
  }, 14000);
};

eventDemo();
