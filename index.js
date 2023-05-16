// const express = require("express");
// const dotenv = require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use("/api/contacts", require("./routes/contactRoutes"));
// app.listen(port, () => {
//     console.log(`Server running on ${port}`);
// })


// const http = require("http");

// http.createServer((req, res) => {
//     res.write("<h1>Hello how are you</>");
//     res.end()
// }).listen(5000);


///////make a simple API (L-11)

/////////.......Make a server, create header and api body, create a api with static data,put data into another file

// const http = require("http");
// const data = require("./data");

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' });
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000);

////////////////////////////////////////////////////////////////

/// Input from commond line  ///////(L-12)

// set input from commond line, create file with input, delete the file with input

// const fs = require("fs");

// const input = process.argv;
// if (input[2] == 'add') {
//     fs.writeFileSync(input[2], input[3])
// }
// else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3])
// }
// else {
//     console.log("invalid output");
// }


////////////////////////////////////////////////////////////////////

///////  Show file list ///// (L-13)

// make files in a folder, use path module, get file names and print

// const fs = require("fs");
// const path = require('path');

// const dirPath = path.join(__dirname, 'files');
// for (let i = 0; i < 4; i++) {
//     fs.writeFileSync(dirPath + "/apple" + i + ".txt", 'this is apple file');
// }

// fs.readdir(dirPath, (err, files) => {
//     // console.log(files);

//     files.forEach((item) => {
//         console.log(item);
//     })
// })


/////////////////////////////////////////////////////////////////////////

//  CRUD with file System  (L-14)
