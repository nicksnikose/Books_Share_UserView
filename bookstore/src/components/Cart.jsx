import React, { useEffect, useState } from "react";

import { BsCheckLg } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../features/auth/authSlice";
import axios from "axios";

export default function Cart() {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const users = useSelector(selectLoggedInUser);

  useEffect(() => {
    const getcart = async () => {
      const response = await fetch(
        `http://localhost:5000/cart/getcart/${users._id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data.length);
      setQuantity(data.length);
      setProduct(data);
    };
    getcart();
  }, []);
  



  {
    const cartItems = []; // Array to store the cart items with quantity

    product.forEach((item) => {
      const existingCartItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.product._id === item.product._id
      );

      if (existingCartItemIndex !== -1) {
        // If the cart item already exists, increment the quantity
        cartItems[existingCartItemIndex].quantity++;
      } else {
        // If it's a new cart item, add it to the array with initial quantity as 1
        cartItems.push({ ...item, quantity: 1 });
      }
    });


//remove cart 
    const handleRemove = async (productId) => {
      try {
        await axios.delete(`http://localhost:5000/cart/${productId}`);
        // Refresh cart items after successful removal
      } catch (error) {
        console.error("Failed to remove cart item:", error);
      }
    };


    return (
      <>
        <Navbar />
        <div className="mt-24">
          <div className="container mt-5">
            {/* <div className="row shadow p-3 bg-white rounded border">
              <div className="col-md-8 col-sm-12 ">
                <p className=" mx-5 text-start ">
                  {" "}
                  Login <BsCheckLg /> <br /> +919402020210{" "}
                </p>
              </div>
              <div className="col-md-4 col-sm-12 justify-content-center d-flex ">
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded px-5 mt-4 w-46 h-10 "
                >
                  {" "}
                  Edit{" "}
                </button>
              </div>
            </div> */}

            {/* <div className="row shadow p-4 bg-white rounded border mt-5">
              <div className="col-md-8 col-sm-12 ">
                <p className="d-flex mx-5 text-start text-sm-center">
                  {" "}
                  Delivery Address{" "}
                </p>
              </div>
              <div className="col-md-4 col-sm-12 justify-content-center d-flex ">
                <Link
                  to="/address"
                  type="button"
                  className="btn btn-outline-secondary rounded px-5 mt-1 "
                >
                  {" "}
                  +Add{" "}
                </Link>
              </div>
            </div> */}

            {cartItems.map((cartItem) => (
              <div
                className="row shadow bg-white rounded border mt-1 p-4"
                id="box"
                key={cartItem.product._id}
              >
                <div className="col-md-3 col-sm-12">
                  <p className="d-flex my-auto p-2 justify-content-center">
                    <img
                      src={`./books/${cartItem.product.img}`}
                      alt="home"
                      width="109"
                      height="125"
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="col-md-6 col-sm-12 text-start">
                  <span>{cartItem.product.description}</span>
                  <br />
                  <br />
                  <div className="flex items-center">
                    <p>
                      <BsCurrencyRupee />
                    </p>
                    <p>
                      <b>{cartItem.product.price}</b>
                    </p>
                  </div>
                  <div className="flex items-center text-[14px]">
                    <p className="">
                      <BsCurrencyRupee />
                    </p>
                    <p>
                      <span>
                        <s></s>
                      </span>
                      &nbsp;
                      <span className="text-[12px] text-green-800">
                        {" "}
                        50% &nbsp; off
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-12 justify-content-end">
                  <div>Quantity :{cartItem.quantity}</div>
                  <center>
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded mt-3"
                      onClick={() => handleRemove(cartItem.product._id)}
                    >
                      {" "}
                      Remove{" "}
                    </button>
                  </center>
                </div>
              </div>
            ))}

            <div className="row bg-white rounded mt-4 mb-4 ">
              <div className="col-sm-12 d-grid gap-2 d-sm-flex justify-content-sm-end ">
                <button
                  type="button"
                  className="btn rounded px-5 text-white"
                  style={{ backgroundColor: "#81A356" }}
                >
                  {" "}
                  Continue{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
