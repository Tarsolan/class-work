// Global Module: HTTP
// -----------------------
// The HTTP interface allows Node to transfer data over the Hyper Text Transfer Protocol.
// It can also create an HTTP server that listens to server ports and gives a response back to the client.

// Sample Usage
// Import Required Modules
const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

// Setting up an extenstion to the EventEmitter class - not neccessary, just to demonstrate how it works

class Listener extends EventEmitter {
  // In order to create listeners that function across multiple programs, we extend the EventEmitter class. This will allow our methods to be used elsewhere.
  // Creates an event and assigns a function to be run when the event is raised
  listen() {
    console.log("Event Listener for changing pages activated.");
    this.on("pageVisit", (pageName) => {
      console.log();
      console.log(`Event Raised: ${pageName} Page Visited.`);
    });
  }

  // This guy is a method now
  pageVisit(message) {
    // Raise an event called pageVisit, to be used when a user goes to any page
    this.emit("pageVisit", message);
  }
}

// Define Constants
const listener = new Listener();
const port = 3000;
const sampleFilePath = "./files/display.json";
const osFilePath = "./files/os.html";

const startServer = (port) => {
  console.log();
  console.log("HTTP Module");
  console.log("-----------");
  console.log();
  // Define the properties of the server and any paths you want - right now, we have two paths: a home page and a sample file page.

  listener.listen(); // Enables the listener in events.js

  const server = http.createServer((req, res) => {
    // The home page
    if (req.url === "/") {
      listener.pageVisit("Home"); // This triggers an "event" - it only console.logs the message passed through, but the concept is clear.

      // This tells the server that this page will be in html format - the actual html data is contained in the .write, though normally this would be done with a seperate file
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        "<h1>Home Page</h1> <h2>Good day!</h2> <p>This is the base url. You could fill me with any html content you want.</p> <a href='/infoFile'>Click me to go to a sample page that will display some info from a file.</a> <br /> <a href='/osInfo'>Click me to see some info on your operating system.</a>"
      );
      res.end();
    }

    const error = (err) => {
      // Handles errors raised by a user attempting to access a file that doesn't exist yet
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h2>Feel empty?</h2><p>You should come back and visit this page after you check out the demo page on the file system module. There will be more to see. For now, click <a href="/">here</a> to go back home.</p>`
      );
    };

    // The info file page - won't have full functionality until after Peter checks out the filesystem module, but that's probably fine
    if (req.url === "/infoFile") {
      listener.pageVisit("Info");
      fs.readFile(sampleFilePath, (err, data) => {
        if (err) {
          // If the file doesn't exist, the module will throw an error and this default page will be created instead
          error(err);
          console.log();
          console.log(
            "You have attempted to view a JSON file that does not yet exist."
          );
          console.log(
            "In order to create it, please run the fileSystem.js module at least once."
          );
          console.log();
        } else {
          // If the file DOES exits, this will happen
          console.log(`A sample file was served!`);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(data);
        }
      });
    }

    // The OS file page - same as above, hopefully this is okay to do with the project!
    if (req.url === "/osInfo") {
      listener.pageVisit("OS");
      fs.readFile(osFilePath, (err, data) => {
        if (err) {
          // If the file doesn't exist, the module will throw an error and this default page will be created instead
          error(err);
          console.log();
          console.log(
            "You have attempted to view information on your Operating System."
          );
          console.log(
            "This is fine, but you'll need to run the fileSystem.js file once before that information will appear here."
          );
          console.log();
        } else {
          // If the file DOES exits, this will happen
          console.log(`The Operating System info was seen!.`);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    }
  });

  // This command actually starts the server on the specified port
  server.listen(port);
  console.log("Server listening on port 3000....");
  console.log("Press CTRL-C to end the server.");
};

startServer(port);
