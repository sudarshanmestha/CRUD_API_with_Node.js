const express = require("express");
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "you are visiting root" });
});

app.get("/login", (req, res) => {
  res.json({ message: "you are visiting login root" });
});

app.get("/sign-up", (req, res) => {
  res.json({ message: "you are visiting signup root" });
});

app.get("/product", async (req, res) => {
  try {
    const product = await Product.find(req.body); // Fixed typo here
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.get('/product/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body); // Fixed typo here
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}); 

// updated product
app.put('/product/:id', async(req, res) => {
  try {
      const {id} = req.params;
      console.log("hhhhhh", id, req?.params, req?.body);
      const product = await Product.findByIdAndUpdate(id, req.body);
      // we cannot find any product in database
      if(!product){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
      
  } catch (error) {
      res.status(500).json({message: error.message})
  }
});

//delete product

app.delete('/product/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product= await Product.findByIdAndDelete(id);
    if(!product){
      return res.status(404).json({message: `cannot find any product with ID ${id}`})
    }
    res.status(200).json(product);

  } catch (error) {
     res.status(500).json({message: error.message})
  }
});




mongoose
  .connect('mongodb+srv://admin:Sudu333!@cluster0.kukvssg.mongodb.net/NodeAPI?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(8000, () => {
      console.log("App is running at 8000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
