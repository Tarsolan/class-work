const { format } = require("date-fns");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

var visitCount = 0;

const logTraffic = async (location, res) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd   HH:mm:ss")}`;
  // Increments the counter for this server load
  visitCount++;

  switch (res.statusCode) {
    case 404:
      var status = "FILE NOT FOUND";
      break;
    case 410:
      var status = "GONE";
      break;
    case 418:
      var status = "I'M A TEAPOT";
      break;
    default:
      var status = "OK";
      break;
  }

  const trafficItem = `${dateTime} \t ${res.statusCode} - ${status} \t ${location} page visited\n`;
  console.log(trafficItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "traffic"))) {
      await fsPromises.mkdir(path.join(__dirname, "traffic"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "traffic", "pageTraffic.txt"),
      trafficItem
    );
  } catch (err) {
    console.log(err);
  }
};

const logTotal = async () => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd   HH:mm:ss")}`;
  const totalItem = `${dateTime} \t Page visits since server open: ${visitCount}`;
  console.log(totalItem);
};

module.exports = { logTraffic, logTotal };
