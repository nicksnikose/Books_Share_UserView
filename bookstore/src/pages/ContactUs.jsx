import React from "react";
import ContactUS from "../components/ContactUs";
import Footer from "../components/Fotter";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactUs = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center">
        <div className=" 2xl:container  ">
          <div className="lg:mt-14 mt-20">
            <ContactUS />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
