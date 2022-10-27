var express = require("express");
var uri = "mongodb+srv://charliesmith:NqXiWMrQe94KnPAU@cluster0.b0omyx9.mongodb.net/?retryWrites=true&w=majority";

const { MongoClient, ServerApiVersion } = require('mongodb');
// const { MongoClient, Logger } = require("mongodb");


const port = 80;
const app = express();
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) throw err;
  console.log("Successfully Connected to the database")
});
const db = client.db("mydb");

app.use(express.json());
   
// For serving static HTML files
app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: true }));
   
app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
     
  // res.send("Hello World");
  return res.redirect("index.html");
});
   
app.post("/formFillUp", (req, res) => {
  var name = req.body.name;
  var reason = req.body.reason;
  var email = req.body.email;
  var phone = req.body.phone;
  var city = req.body.city;
  var state = req.body.state;
  var addressline = req.body.addressline;
   
  var data = {
    name: name,
    reason: reason,
    email: email,
    phone: phone,
    city: city,
    state: state,
    addressline: addressline,
  };
   
  db.collection("users").insertOne(
  data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Data inserted successfully!");
  });
   
  return res.redirect("formSubmitted.html");
});
   
app.listen(port, () => {
  console.log(`The application started 
  successfully on port ${port}`);
});