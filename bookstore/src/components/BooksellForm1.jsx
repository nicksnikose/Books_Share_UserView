/* eslint-disable react/no-unescaped-entities */
import { RxCross1 } from "react-icons/rx";
import { Select, Option, Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useForm } from "react-hook-form";
import { selectLoggedInUser } from "../features/auth/authSlice";
import {
  selectProduct,
  createProductAsync,
} from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

import { Select } from "./components";

const BookSellForm1 = () => {
  const [all, setAll] = useState({});
  const dispatch = useDispatch();
  const [img, setimg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = useSelector(selectLoggedInUser);

  return (
    <div>
      <div className="lg:p-[60px] p-[30px] ">
        {/* heading */}
        <form
          action=""
          className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3"
          onSubmit={handleSubmit((data) => {
            dispatch(
              createProductAsync({
                title: data.title,
                description: data.description,
                price: data.price,
                noofbooks: data.noofbooks,
                userId: user._id,
              })
            );
            console.log(data);
          })}
        >
          <div className="pb-6">
            <h2 className="text-center lg:p-4  lg:text-[28px] md:text-[24px] text-[18px]">
              BooksShare - Sellers Form{" "}
            </h2>
          </div>

          <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3 lg:text-[24px] text-[20px]">
            <span>
              <label htmlFor="">title </label>
              <br />
              <input
                {...register("title")}
                type="text"
                maxLength={6}
                className="w-72 mt-2 border border-black rounded ps-2"
              />
            </span>
            <div className="lg:text-[24px] text-[20px]">
              <label htmlFor="" className="">
                Description<span className="text-[red]">*</span>
              </label>
              <textarea
                {...register("description")}
                id=""
                rows="3"
                className="w-full border border-black rounded ps-2"
              ></textarea>
            </div>
            <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3 lg:text-[24px] text-[20px]">
              <span>
                <div className="flex w-72 flex-col gap-6">
                  <span>
                    <label htmlFor="">Price :- </label>
                    <br />
                    <input
                      {...register("price")}
                      type="text"
                      maxLength={6}
                      className="w-72 mt-2 border border-black rounded ps-2"
                    />
                  </span>
                </div>
              </span>
            </div>
          </div>

          {/* address */}
          <div className="lg:text-[24px] text-[16px] md:text-[20px] py-3 text-[Inter] ">
            You can Courier the books to us At :- G-5 Anand Rajani, Apartment IT
            park pin Code : 440022 OthorWise our Courier boys will reached to
            your Address and pickup the Books.
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:ms-[150px]">
            <div className="lg:text-[24px] text-[20px] ">
              <label htmlFor="">Enter No. of Book's</label>
              <br />
              <input
                type="number"
                {...register("noofbooks")}
                className="w-52 border border-black rounded ps-2 "
              />
            </div>
          </div>

          {/* <div className='py-6'>
        <label htmlFor="" className='font-bold lg:text-[24px] text-[20px]'>Price of Book's</label><br />
        <input type="checkbox" color='black' className='' /><span> Price Will be 50 % off for Every Book</span>
      </div> */}
          <div>
            <center className="py-6">
              <Button
                color="green"
                type="submit"
                className="bg-[#81A356] font-normal px-4 py-2 lg:text-[18px] text-[14px]"
              >
                Submit
              </Button>
            </center>
          </div>
        </form>
      </div>
      <div className="lg:text-[24px] text-[20px] ">
        <label htmlFor="">Image of Book's</label>
        <br />
        <input
          type="file"
          className="w-72 "
          onChange={(e) => {
            setimg(e.target.files[0]);
          }}
        />
        <span>
          <button>upload</button>
        </span>
      </div>
    </div>
  );
};

export default BookSellForm1;
