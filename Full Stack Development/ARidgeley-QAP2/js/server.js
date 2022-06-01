// QAP 2 - Full Stack Development
// Developer - Alex Ridgeley
// Due Date - May 31, 2022

const http = require("http");
const port = 3000;
const routes = require("./routes");
const { myEmitter } = require("./events");
const startTime = new Date();

const server = http.createServer((req, res) => {
  var path = "../html/";
  switch (req.url) {
    // case "../css/style.css":
    //   res.statusCode = 200;
    //   path = "../css/style.css";
    //   routes.displayCSS(path, res, "CSS");
    //   break;

    case "/":
      res.statusCode = 200;
      path += "index.html";
      routes.displayFile(path, res, "Home");
      break;

    case "/about":
      res.statusCode = 200;
      path += "about.html";
      routes.displayFile(path, res, "About");
      break;

    case "/sub":
      res.statusCode = 200;
      path += "subscribe.html";
      routes.displayFile(path, res, "Subscribe");
      break;

    case "/products":
      res.statusCode = 200;
      path += "products.html";
      routes.displayFile(path, res, "Products");
      break;

    case "/pictures":
      res.statusCode = 200;
      path += "pictures.html";
      routes.displayFile(path, res, "Picture");
      break;

    case "/hobbits":
      // As this is an image, the path name will be changed moreso than usual
      res.statusCode = 200;
      path = "../img/hobbit.avif";
      routes.displayFile(path, res, "Hobbit Hole");
      break;

    case "/stuff":
      // Sample Redirect - sends you to products page
      res.statusCode = 301;
      res.setHeader("Location", "/products");
      res.end();
      break;

    case "/war":
      // Sample 410 status code - ideally these need to be removed from the site.
      res.statusCode = 410;
      path += "war.html";
      routes.displayFile(path, res, "War");
      break;

    case "/fool":
      // Sample 418 code - just a teapot
      res.statusCode = 418;
      path += "fool.html";
      routes.displayFile(path, res, "Teapot");
      break;

    default:
      // In the event of a non-existant page
      path += "404.html";
      res.statusCode = 404;
      routes.displayFile(path, res, "404");
      break;
  }
});

// This will run when the server is closed
server.on("close", () => {});

process.on("SIGINT", () => {
  const endTime = new Date();
  const upTime = (endTime - startTime) / 1000;
  console.log("Stopping server...");

  // This doesn't really do anything special. It saves a counter of how many individual pages were visited.
  // Mostly just did this to see if I could get an event to fire when the server closes.
  myEmitter.emit("closeServer");

  // Another fun little test to see if I could record uptime
  console.log(`Server uptime: ${Math.round(upTime)} seconds`);
  process.exit(0);
});

server.listen(port, "localhost");
console.log(`Server listening on port ${port}, press CTRL + C to cancel...`);
