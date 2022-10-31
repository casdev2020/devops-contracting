  
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const port = 3002;

// Setting up the public directory
// app.use(express.);
   
// For serving static HTML files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   res.set({
//     "Allow-access-Allow-Origin": "*",
//   });
     
//   res.send();
//   // return res.redirect("index.html");
// });

// app.listen(port, () => console.log(`Listening on: ${port}`));
module.exports.handler = serverless(app);
app.listen(port, () => console.log(`listening on port ${port}!`));
