import React from "react";
import BlogPage from "../components/blogpage";
import Footer from "../components/Fotter";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="flex justify-center items-center">
    <div className=" sm:mt-6 lg:mt-24 2xl:container   lg:container "> 
          <div className="mt-20 lg:mt-6">
            <BlogPage />
          </div><br /><br />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
