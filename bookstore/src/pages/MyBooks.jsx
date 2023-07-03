


/* eslint-disable react/no-unescaped-entities */
import {
    Card,
    CardHeader,
    CardBody,
    Navbar,
    Button,
    Input,
    Typography,
    CardFooter,
  } from "@material-tailwind/react";
  import { BsSearch } from "react-icons/bs";
  import { useForm } from "react-hook-form";
  import Navbar1 from '../components/Navbar'
  
  
  
  import { TbShoppingCart } from "react-icons/tb";

  import { useSelector } from "react-redux";
  import { selectProduct } from "../features/product/productSlice";
  import { useEffect, useState } from "react";
  import { selectLoggedInUser } from "../features/auth/authSlice";

  export default function Mybooks() {
   
  const[products,setProducts]=useState([])
  const user = useSelector(selectLoggedInUser)
  
    useEffect(()=>{
  
  const getproduct =async ()=>{
    const product = await fetch(`http://localhost:5000/products/${user._id}`)
    const data = await product.json()
    console.log(data)
    setProducts(data)
  }
  getproduct()
  
    },[]);
  
  
    return (
        <div>
    <Navbar1 />
      <div>
        <Navbar className="mx-auto max-w-screen-sm px-2 py-2 text-black my-3">
          <div className="flex  items-center justify-between gap-y-4 ">
            <div className="relative flex w-full lg:w-full ">
              <Input type="search" color="green" label="Search..."  />
              <Button
                size="sm"
                className="!absolute right-1  top-1 px-6 rounded bg-[#81A356] flex "
              >
                <BsSearch className=" text-[20px]" />
              </Button>
            </div>
          </div>
        </Navbar>
  
        {/* card row 1 */}
        <div className="bg-[#DDDDDD] mt-3 p-5"> 
          <strong className="lg:ms-28 text-[22px] text-[blue] m-14 ">My Books</strong>
  
          <div className="  grid lg:grid-cols-4 md:grid-cols-2 mt-3 sm:grid-cols-1 ">
            {/* card one */}
       {
  products.map((item)=>(
    <Card className="w-64 bg-[#FFFFFF] item-center  mx-auto mb-5" key={item._id}>
    <CardHeader shadow={false} floated={false}>
      <center>
        <img src={`./books/${item.img}`} className="w-[120px] h-[188px] " alt="img" />
      </center>
    </CardHeader>
    <CardBody>
      <div className="flex items-center justify-between mb-2">
        <Typography  className="font-medium text-center text-[14px]">
         {item.title}
        </Typography>
      </div>
      <Typography className="font-medium text-center">
        <span className="text-[#503E3E] text-[14px] pe-[20px]">
          
          <strike></strike>
        </span>
        <span className="text-black text-[18px]">{item.price}</span>
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button
        ripple={false}
        fullWidth={true}
        className="bg-[#08A459] hover:shadow-none hover:scale-105 focus:shadow focus:scale-105 "
      >
        <center>
          {/* <TbShoppingCart  className="text text-[22px]" /> */}
          SELL
        </center>
      </Button>
    </CardFooter>
  </Card>
  ))
       }
  
          </div>
        </div>
  
        {/* Footer */}
      
  
      </div>
      </div>

    );
  }
  



