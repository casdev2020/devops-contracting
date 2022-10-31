const express = require('express');
const app = express();

const port = 3000;

// Setting up the public directory
app.use(express.json());
   
// For serving static HTML files
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
   
app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
     
  // res.send("Hello World");
  return res.redirect("index.html");
});

app.listen(port, () => console.log(`listening on port ${port}!`));