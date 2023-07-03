import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode"
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../features/auth/authSlice';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    
    const [updatedData, setUpdatedData] = useState(null);
    const [img, setImg] = useState(null);
    const user = useSelector(selectLoggedInUser)
    const [data, setData] = useState({
      firstName:user.firstName,
      email:user.email,
      phone:user.phone,
      img:user.img
    });

 


  const [previousData, setPreviousData] = useState(JSON.parse(sessionStorage.getItem("data")));

const navigate = useNavigate()


  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
}

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };



   const handleSubmit = async (event) => {

    event.preventDefault();
      console.log()
    try {
      const formData = new FormData();
      formData.append('image', img);
     
      const response = await axios.put(`http://localhost:5000/users/${user._id}/image`, formData);
      if (response.data.success) {
        console.log('Image uploaded successfully');
      } else {
        console.log('Failed to upload image');
      }
    } catch (error) {
      console.log('An error occurred while uploading the image');
      console.error(error);
    }

      try {
        const response = await axios.put(`http://localhost:5000/users/${user._id}`,data);
        if (response.status === 200) {
          navigate("/")
          console.log('Data uploaded successfully');
          console.log('Previous data:', previousData);
          // Retrieve the previous token data from session storage
          const previousTokenData = JSON.parse(sessionStorage.getItem('data'));
          // Update the previous token data with the new data
          console.log(response);
          const updatedTokenData = {
            ...previousTokenData,
            token: response.data.newtoken,
            data: {
              user: response.data.data
            }
          };
          
          // Store the updated token data back in session storage
       
        
          // Update the previousData state with the new data
          setPreviousData(updatedTokenData.data.user);
        } else {
          console.log('Failed to upload data');
        }
      } catch (error) {
      
          console.log('An error occurred while uploading the data');
          
        }

  };



  return (
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">

    <div>
        <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
          First Name
        </label>
        <div className="mt-2">
          <input
            id="firstname"
            name="firstName"
            type="text"
            value={data.firstName}
            autoComplete="text"
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>



      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            type="text"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="AdharNo" className="block text-sm font-medium leading-6 text-gray-900">
            Phone
          </label>
      
        </div>
        <div className="mt-2">
          <input
            id="phone"
            name="phone"
            type="text"
            value={data.phone}
            onChange={handleChange}
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>


      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="AdharNo" className="block text-sm font-medium leading-6 text-gray-900">
          Profile Image
          </label>
      
        </div>
        <div className="mt-2">
          <input
            id="image"
            name="image"
            type="file"
            onChange={(e)=>setImg(e.target.files[0])}
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {
(user.img!=="default.jpg")?(

          <img src={`./userProfile/${user.img}`} alt="sdf" style={{width:"100px",height:"100px"}} />
):(
  <h1></h1>
)
          }
        </div>
      </div>


      

    


      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
          style={{
                        background:
                          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                      }}>
          Sign up
        </button>
      </div>
    </form>


  


  </div>
  );
};

export default Upload;