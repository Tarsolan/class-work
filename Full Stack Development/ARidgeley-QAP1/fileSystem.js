// Global Module: File System
// -----------------------
// The fs module provides a lot of very useful functionality to access and interact with the file system.
// You can use it for a wide range of things, including reading and writing files and directories, copying files, checking permissions, and creating hard links to files.

// Sample Usage
// Import Required Modules
const fs = require("fs");
const os = require("os");

// Define constants
const sampleFilePath = "./files/display.json";
const osFilePath = "./files/os.html";

// This function will create a file. We will then load and display this file in our server
const createFiles = () => {
  // The "File" to be saved
  console.log();
  console.log("File System Module");
  console.log("------------------");
  console.log();
  const file = {
    id: "3",
    name: "Alex Ridgeley",
    email: "alex.ridgeley@keyin.com",
  };

  // Add new files - gave it a slight time delay to make it feel like it was loading something
  console.log("Checking for files...");
  setTimeout(() => {
    // Add sample JSON file
    fs.readFile(sampleFilePath, (err, data) => {
      // Attempts to read the file - if it does not exist, it creates the file
      if (err) {
        fs.writeFile("./files/display.json", JSON.stringify(file), (err) => {
          if (err) throw err;
          console.log("Sample JSON: File created!");
        });
      } else {
        // If the file already exists, the console will tell us
        console.log(
          "Sample JSON: File already exists, no need to create again!"
        );
      }
    });

    // Add OS Info File

    // Fetch OS Info
    // Save relevant info to variables and returns the info as in HTML
    var platform = `<li>Platform: ${os.platform()}</li>`;
    var architecture = `<li>Architecture: ${os.arch()}</li>`;
    var hostname = `<li>Hostname: ${os.hostname()}</li>`;
    var upTime = `<li>System Uptime: ${os
      .uptime()
      .toLocaleString()} seconds</li>`;
    var freeMemory = `<li>Free Memory: ${os
      .freemem()
      .toLocaleString()} bytes</li>`;

    // This is for the HTTP Server - with this data in HTML form it can be easily formatted to be displayed on a page
    var osInfo = `<body><h2>Operating System Info</h2><p>The host system is operating with the following: <ul>${platform}${architecture}${hostname}${upTime}${freeMemory}</ul><a href="/">Click me to go home.</a></body>`;

    fs.readFile(osFilePath, (err, data) => {
      // Attempts to read the file - if it does not exist, it creates the file
      if (err) {
        fs.writeFile("./files/os.html", osInfo, (err) => {
          if (err) throw err;
          console.log("OS Info: File created!");
          console.log();
        });
      } else {
        // If the file already exists, the console will tell us
        console.log("OS Info: File already exists, no need to create again!");
        console.log();
      }
    });
  }, 2000);
};

createFiles();
