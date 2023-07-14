const express = require("express");
const app = express();




app.get("/", (req, res) => {
 res.json({ message: "yout visiting root" });
});


app.get("/login", (req, res) => {
 res.json({ message: "your visiting login root" });
});

app.get("/signup", (req, res) => {
 res.json({ message: "yout visiting signup root" });
});





app.listen(8000, () => {
 console.log("App is running at 8000");

});