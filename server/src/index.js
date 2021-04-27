// import the server and start listening
// serve the frontend 
const Server = require('./server');
const Socket = require('./socket');


const port = 3000

Server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




// const distanceValues = [];

// // start listening for the distance sensor
// distanceSensor.read((val) => {
//   distanceValues.push({x: new Date().getTime(), y: val})
//   io.emit('distance', distanceValues);
// });
