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

// const fs = require("fs");
// const path = require("path");

// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, "this is a simple text file");

// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })

// fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
//     if (!err) {
//         console.log("file is updated");
//     }
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log("file is updated");
//     }
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)


//////////////////////////////////////////////////////////////

//         Asynchronous basics in Node js /////////   [L-15+16]

// console.log("Start time");
// setTimeout(() => {
//     console.log("I am printed after 3 seconds");
// }, 3000)
// console.log("end time");

// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//     }, 2000)
// })
// waitingData.then((data) => {
//     b = data;
//     console.log(a + b)
// })

////////////////////////////////////////////////////////////////////

//   How Node js works //////////       [L-17]

// call stack, node API, callBack Queue == Event Loop

// console.log("starting");

// setTimeout(() => {
//     console.log("2 second log");
// }, 2000);

// setTimeout(() => {
//     console.log("0 second log");
// }, 0);

// console.log("finishing");


////////////////////////////////////////////////////////////////////////////

//////////////             Express Js                      ////////////////////

// it is a framework of node.js

// const express = require("express");
// const app = express();

// app.get('', (req, res) => {
//     console.log("data sent by browser =>>> ", req.query.name);
//     res.send('hello this is home page');
// })

// app.get('/about', (req, res) => {
//     res.send('hello this is about page');
// })

// app.listen(5000);


//////////////////////////////////////////////////////////////////////////////

///// Render HTML and JSON /////////   [L-20]

// const express = require("express");
// const app = express();

// app.get('', (req, res) => {
//     res.send(`
//     <h1>hello this is home page</h1>
//     <a href="/about">Go to about page</a>
//     `);
// })

// app.get('/about', (req, res) => {
//     res.send(`
//     <input type="text" placeholder="user-name" />
//     <button>Click Me</button>
//     `);
// })

// app.get('/json', (req, res) => {
//     res.send({
//         name: "Rajesh",
//         age: 25,
//         city: "Bangalore"
//     });
// })

// app.listen(5000);

///////////////////////////////////////////////////////////////////////

// ......................  Make HTML pages .................

// make folder for html file and access it, make html files, load html files

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, 'public')
// app.use(express.static(publicPath))

// app.listen(5000)


//////////////////////////////////////////////////////////////////////////////////

// ......... Remove exptension from url ...................[L-22]

// apply get method, remove an extension from url, make 404 page, apply 404 page

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, 'public')

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/home.html`)
// })

// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/error.html`)
// })

// app.listen(5000)

//////////////////////////////////////////////////////////////////////////////////////

// ...........................  Template Engine ....................................

// setup dynamic routing , make dynamic page

const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs')  //first parameter is view engine and second template engine ejs

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/home.html`)
})

app.get('/profile', (req, res) => {
    const user = {
        name: "Ahmed",
        age: 25,
        job: "Software Developer",
    }
    res.render('profile', { user })
})

app.listen(5000)