/* eslint-disable react/no-unescaped-entities */
import { RxCross1 } from "react-icons/rx";
import { Select, Option, Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  mono: "",
  addr: "",
  state: "",
};
const DonorForm = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(
        "files file:  registration.jsx ~  line 11 ~ registration ~ values",
        values
      );
    },
  });

  return (
    <div>
      <div className="container max-w-2xl border-spacing-2 border rounded-md  mt-3 p-4 shadow bg-[#FFEADD]">
        {/* heading */}
        <div className="pb-6 flex items-center">
          <Link to="/">
            <img
              src="./logo1.png"
              className="lg:w-20 w-11 h-11 lg:h-16 -m-2"
              alt=""
            />
          </Link>
          <h2 className=" lg:p-4  lg:text-[28px] md:text-[24px] ms-8 lg:ms-20 text-[20px]">
            BooksShare - Donators Form{" "}
          </h2>
        </div>

        {/* form */}
        <form action="" onSubmit={handleSubmit}>
          <div className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-3">
              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">First Name</label>
                <input
                  required
                  type="text"
                  id="fname"
                  name="fname"
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-black rounded ps-2 shadow-md "
                />
              </div>

              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">Title</label>
                <input
                  required
                  type="text"
                  name="lname"
                  id="lname"
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-black rounded ps-2  shadow-md"
                />
              </div>
              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">E-mail</label>
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-black rounded ps-2  shadow-md"
                />
              </div>

              <div className="lg:text-[20px] text-[18px]">
                <label htmlFor="">Mobile Number</label>
                <input
                  type="text"
                  required
                  name="mono"
                  id="mono"
                  maxLength={10}
                  value={values.mono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-black rounded ps-2 shadow-md"
                />
              </div>

              <div className="lg:text-[18px] text-[16px]">
                <label htmlFor="" className="">
                  Description
                </label>
                <textarea
                  name="addr"
                  id="addr"
                  value={values.addr}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="3"
                  className="w-full border border-black rounded ps-2"
                ></textarea>{" "}
              </div>
              <div className="     lg:text-[20px] text-[18px] gap-3">
                <div className="mb-4">
                  <label htmlFor="">Pin Code </label>
                  <br />
                  <input
                    type="text"
                    maxLength={6}
                    className="  border border-black rounded ps-2 shadow-md"
                  />
                </div>
                <div>
                  <label htmlFor="">City in Maharashtra </label>
                  <div className="flex mt-1 flex-col gap-6">
                    <Select
                      name="state"
                      color="green"
                      className="  border bg-white rounded border-black"
                    >
                      <Option>Nagpur </Option>
                      <Option>Wardha </Option>
                      <Option>Yavatmal </Option>
                      <Option>Nashik </Option>
                      <Option>Amravati </Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* address */}

          <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 md:mt-4 gap-y-4">
            <div className="lg:text-[20px] text-[18px] ">
              <label htmlFor="">Image of Book's</label>
              <br />
              <input type="file" className="shadow-md w-60 " />
            </div>{" "}
            <div className="lg:text-[20px] text-[18px] ">
              <label htmlFor="">No. of Book's</label>
              <br />
              <input
                type="number"
                className="w-52 border border-black rounded ps-2 shadow-md"
              />
            </div>
          </div>

          <div>
            <center className="py-6">
              <Link to="/store">
                <Button className="bg-[#f05345] font-normal px-4 py-2  text-white lg:text-[18px] text-[14px]">
                  Cancel{" "}
                </Button>
              </Link>

              <Button
                color="green"
                type="submit"
                className="bg-[#81A356] font-normal px-4 py-2 lg:ms-8 ms-2 lg:text-[18px] text-[14px]"
              >
                Submit
              </Button>
            </center>
          </div>
          <ToastContainer />
        </form>

        <div className="lg:text-[14px] text-[12px] ">
          <h6>
            For courier the books to us at :- G-5 Anand Rajani Apartment, IT
            park pin Code : 440022
          </h6>
          {/* <h6>Or Our Courier Boys Will Reached to  and Pick Up The Books.</h6> */}
        </div>
      </div>
    </div>
  );
};

export default DonorForm;
