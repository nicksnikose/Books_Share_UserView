const express = require("express")

const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const nodemailer = require("nodemailer")
const {Signup,Products,Addcart} = require("../model/Schema")
const productController = require("../controller/productController")


const router = express.Router();

const storage = multer.diskStorage({
  destination: '../bookstore/public/books',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});
const upload = multer({ storage: storage });




router
  .route('/products')
  .post(productController.creataProducts) //creating a product (title ,description ,price ,number of books)

  .post(upload.single("img"),productController.uploadBook)



router.get("/products", productController.getProducts)  //getting  all products 

router.put("/product/:created/image", upload.single("img"), productController.uploadBook)  //uploading a book user to the database

router.get("/products/:created/", productController.getMyProducts)  //getting user uploading product 

router.post("/cart/addcart/", productController.Addcart)  //add to cart page user point of view

router.get("/cart/getcart/:userId", productController.getcart) // getting thats carts






//deleting products
router.delete('/cart/:productId', async (req, res) => {
  try {
    const { productId } = req.params;

    // Remove the cart item from the database
    const result = await Addcart.deleteOne({ product: productId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.json({ message: 'Cart item removed successfully' });
  } catch (error) {
    console.error('Failed to remove cart item:', error);
    res.status(500).json({ error: 'Failed to remove cart item' });
  }
});


  module.exports = router;