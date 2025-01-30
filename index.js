const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
   res.send("Hello, from Node API Server YAS Mon");
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://rollfordmg:DB_PWD@dbvendors.56flg.mongodb.net/?retryWrites=true&w=majority&appName=dbVendors")
.then(() => {
   console.log('Connected to Database!');
   app.listen(3000, () => {
      console.log('Server is running on port 3000');
   });
})
.catch(() => {
   console.log('Connection failed');
});
