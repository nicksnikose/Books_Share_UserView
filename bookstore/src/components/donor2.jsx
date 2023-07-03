import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import { Carousel } from "@material-tailwind/react";
import axios from "axios";

export default function DonorC() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users");
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getdata();
  }, []);

  return (
    <>
      <div>
        <Carousel
          transition={{ type: "tween", duration: 2 }}
          autoplay="true"
          loop
          className="rounded-xl"
          style={{ height: "30vmax" }}
        >
          <img
            src="./imgc/book3.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="./imgc/book2.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="./imgc/book1.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <br />
      <br />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ms-12 me-12 ">
        {user.map((use) => (
          <div className="" key={use.id}>
            <Card
              color="transparent"
              shadow={false}
              className=" border-4 w-full "
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-3 pt-0 pb-2"
              >
                <Avatar
                  className="ms-2 "
                  size="xxl"
                  variant="circular"
                  src={`./userProfile/${use.img}`}
                  alt=""
                />
                <div className="flex w-full flex-col">
                  <div className="flex items-center justify-between text-[16px] mb-1">
                    <Typography variant="h4" color="blue-gray">
                      {use.firstName}
                    </Typography>
                  </div>

                  <Typography
                    className="headi text-[16px] mb-2"
                    color="blue-gray"
                  >
                    New York,America
                  </Typography>
                  <Typography
                    className="text-[16px]"
                    style={{ color: "#00A51B" }}
                  >
                    Donated Books:481
                  </Typography>
                </div>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
// style={{backgroundColor: `${getrandomcolor()}`}}
// function getrandomcolor() {
//     return "#" + ((1<<24)*Math.random() | 0). toString(16);
// }
