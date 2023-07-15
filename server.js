const express = require("express")
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()
app.use(express.json())


app.get("/", (req, res) => {
 res.json({ message: "yout visiting root" });
});


app.get("/login", (req, res) => {
 res.json({ message: "your visiting login root" });
});

app.get("/sign-up", (req, res) => {
 res.json({ message: "yout visiting signup root" });
});

app.post("/product", async(req, res)  => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})





mongoose.
connect('mongodb+srv://admin:Sudu333!@cluster0.kukvssg.mongodb.net/NodeAPI?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(8000, () => {
        console.log("App is running at 8000");
       
       });   
})
.catch((error) => {
    console.log(error)
})