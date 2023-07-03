const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

// create schema
const salt=bcrypt.genSaltSync(10)

const signupSchema = new Schema({
    firstName: {
        type:String,
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,   
        unique:true 
    },
    password:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    address:{
     type:String
    },
    pincode:{
      type:String
    },
    city:{
      type:String
    },
    img:{
        type:String,
        default: 'user-profile.png'
    },
    otp:{
      type:Number
    },
    bookimg:{
    type:String,
    default:"book.jpg"
    }

});


const productSchema=new Schema({
  title:{type:String, require:true},
  description:{type:String,require:true},
  price:{type:Number,require:true},
  img:{type:String,default:"demo.jpg"},
  noofbooks:{type:String},
  type:{type:String},
  created: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup', required: true },
})



const cartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'signup',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

signupSchema.pre('save', function(next) {
    if (this.isModified('password')) { // check if password is modified then has it
      var user = this;
      bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    } else {
      next();
    }
  });

signupSchema.methods.correctPassword=async function(
    candidatePassword,
    userPassword
){
 return await bcrypt.compare(candidatePassword,userPassword)
};


const Signup = mongoose.model('signup',signupSchema);

const Addcart = mongoose.model('addcart',cartSchema);
const Products = mongoose.model('products',productSchema);

module.exports = {
  Signup,
  Addcart,
  Products,
};
