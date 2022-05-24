// Global Module: OS
// -----------------------
// The OS module provides operating system-related utility methods and properties. It can be used to identify info about the OS of the user, such as system uptime, available memory
// and the currently installed OS. Good for diagnostics.

// Sample Usage
// Import Required Modules
const os = require("os");

const osInfo = () => {
  let processorInfo = os.cpus();
  // If someone directly runs this file from the terminal, this is the output they will recieve
  console.log();
  console.log(`Operating System Info`);
  console.log("---------------------");
  console.log(`Operating System: ${os.platform()}`);
  console.log(`OS Architecture: ${os.arch()}`);
  console.log(`Your system name is: ${os.hostname()}`);
  console.log(
    `Time since your last restart: ${os.uptime().toLocaleString()} seconds`
  );
  console.log();
  console.log(`Free Memory: ${os.freemem().toLocaleString()} bytes`);
  console.log(`Total Memory: ${os.totalmem().toLocaleString()} bytes`);
  console.log();
  console.log("CPU Core Information: ");
  console.log("---------------------\n");

  // This will print the info on each processor in sequence
  let processorCount = 1;
  for (let i = 0; i < processorInfo.length; i++) {
    setTimeout(() => {
      console.log(`Processor: ${processorCount}`);
      console.log(`Model: ${processorInfo[i].model}`);
      console.log(`Speed: ${processorInfo[i].speed} GHz`);
      processorCount++;
      console.log();
    }, (i + 1) * 1000);
  }
};

osInfo(); // Mostly a debug to make sure the module has read everything correctly, and so that something actually displays if you run this file on its own
