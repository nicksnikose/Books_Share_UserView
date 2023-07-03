const {Signup,Products,Addcart} = require("../model/Schema")

//getting  all products 
exports.getProducts = (req,res)=>{
  Products.find().then((result)=>{
      res.json(result)
  })
}


//getting user product to user profile sector
exports.getMyProducts = (req,res)=>{
  const {created} = req.params
  Products.find({created:created}).then((result)=>{
      res.json(result)
  })
}

exports.creataProducts=  async (req, res) => {
  const { title, description, price, userId,type } = req.body;

  try {
    // Find the user by their ID
    const user = await Signup.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new product with the user ID
    const newProduct = new Products({
      title,
      description,
      price,
      created: user._id,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
        //uploading a book user to the database

      exports.uploadBook=async(req,res)=>{
      
          const {created} = req.params;
        
          try {
               const user = await Products.findOneAndUpdate(
          { created: created },
          { $set: { img: req.file.filename } },
          { new: true }
        ); 
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
            }
        
            if (req.file) {
              // If a file is uploaded, update the image field
              user.img = req.file.filename;
            }
        
        await user.save({ validateBeforeSave: false })
          } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
          }
        }


        
      //add to cart list

       exports.Addcart= async (req, res) => {
          try {
            const { userId, productId, quantity } = req.body;
        
            // Create a new cart item
            const cartItem = new Addcart({
              user: userId,
              product: productId,
              quantity: quantity
            });
        
            // Save the cart item to the database
            const savedCartItem = await cartItem.save();
        
            res.status(201).json(savedCartItem); // Return the saved cart item as a response
          } catch (error) {
            res.status(500).json({ error: 'Failed to add product to cart' });
          }
        };





        //Retrieve/Getting  the cart items for the given user ID and populate

      exports.getcart = async (req, res) => {
  try {
    const { userId } = req.params;

    // Retrieve the cart items for the given user ID and populate the product and user details
    const cartItems = await Addcart.find({ user: userId }).populate('product').populate('user');

    res.json(cartItems); // Return the cart items as a response
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to retrieve cart items' });
  }
};
      
        
        
        
        
        
        



      
      
