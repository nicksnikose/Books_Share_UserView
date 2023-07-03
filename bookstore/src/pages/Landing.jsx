import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { whyyou } from "../utilities";
import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Protected from "../features/auth/Protected";
import Detected from "../features/auth/Detected";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-20 lg:mt-10">
        <div className=" 2xl:container lg:container  ">
          <div className="flex justify-center items-center">
            <div className="container">
              <section className="relative p-[px]">
                <div className=" lg:p-[100px] sm:p-[10px]">
                  <div className="lg:flex flex-row-reverse ">
                    <div className=" md:ps-[200px] ">
                      <Link to="/">
                        <img
                          className="shadow-2xl w-[400px] "
                          src="./images/hero.png"
                          alt="main"
                        />
                      </Link>
                    </div>
                    <div className="hero-text lg:w-[560px] ">
                      <h1 className=" text-[50px]  leading-[50px] ">
                        Remove the darkness by giving the light of knowledge
                      </h1>
                      <p
                        className="mt-8 text-[22px] "
                        style={{ fontFamily: "jejuMyeongjo" }}
                      >
                        from applied literature to education resources we have
                        lot of textbooks to offer you. We provide only the best
                        books to you
                      </p>
                      <div className="lg:w-[400px] sm:p-4 pe-4 flex justify-between p-5">
                        <div>
                          <Detected> 
                            <Link className="primary-button me-2 w-32" to="/login">
                              Log In
                            </Link>
                            <Link className="primary-button w-32" to="/register">
                              Register
                            </Link>
                          </Detected>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:pl-[100px] sm:p-[10px] ]">
                  <div className="lg:flex justify-between ">
                    <div className="sm:items-center justify-items-center ">
                      <img
                        className="w-[400px] "
                        src="./images/hero1.jpeg"
                        alt="hero1"
                      />
                    </div>
                    <div className="lg:w-[450px] p-3 lg:pr-[50px]">
                      <h1 className="lg:text-[40px]  text-[20px] ">
                        We are All In Together Each And Every One Of Us Can Make
                        A Difference By Giving Back
                      </h1>
                    </div>
                  </div>
                </div>
              </section>

              {/* card */}

              <div className="">
                <section className=" p-10 text-center">
                  <h1 className="text-[36px] ">You Are Here For ?</h1>
                  <div className=" mt-[10px] grid sm:grid-cols-1  lg:grid-cols-3  mb-28 gap-9  w-full">
                    {whyyou.map((item) => {
                      // eslint-disable-next-line react/jsx-key
                      return (
                        <div className=" " key={item.title}>
                          <Card
                            shadow={false}
                            className="   lg:h-[25rem]  h-[28rem]  lg:   overflow-hidden text-center"
                          >
                            <CardHeader
                              floated={false}
                              shadow={false}
                              color="transparent"
                              style={{ "--image-url": `url(/${item.img})` }}
                              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[image:var(--image-url)] bg-cover bg-center"
                            >
                              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                            </CardHeader>
                            <CardBody className="relative py-14 px-6 md:px-5">
                              <Typography
                                variant="h2"
                                color="white"
                                className="mb-6 font-medium leading-[1.5]"
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                variant="h5"
                                className="mb-7 text-gray-400"
                              >
                                {item.subtitle}
                              </Typography>
                              <button className=" outline-none   font-extrabold text-muted  text-white  ">
                                {item.btn}
                              </button>
                            </CardBody>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>
          </div>
          {/* about */}

          <div>
            <h1 className="text-[36px] text-center">Vision</h1>

            <div className="">
              <img src="./images/About.jpeg" className="w-full" alt="about" />
            </div>

            <div className="p-[40px]">
              <div className="mt-[50px]">
                <h1 className="text-[22px]">
                  <span className=" font-extrabold">W</span>elcome to BookShares
                  .We are passionate about promoting literacy and education by
                  providing Book donation to communities in need. Our mission is
                  to make books accessible to individual who may needy for it.
                </h1>{" "}
              </div>
              <div className="mt-[50px]">
                <h1 className="text-[22px]">
                  <span className=" font-extrabold">F</span>ounded in 2023, we
                  have been dedicated to spreading the joy of reading and the
                  power of knowledge through our book donation programs. We
                  strongly believe that books have the ability to transform
                  lives.
                </h1>{" "}
              </div>
              <div className="mt-[50px]">
                <h1 className="text-[22px]">
                  <span className=" font-extrabold">O</span>ur team is composed
                  of enthusiastic volunteers who share a common goal to make a
                  positive impact on society through the gift of books We work
                  tirelessly to collect, sort, and distribute donated books to
                  libraries. <span className="border-b-2 ">More</span>
                </h1>{" "}
              </div>
            </div>
          </div>
          {/* hoe it works */}

          <div className="">
            <center>
              <div>
                <img src="./images/Frame 22.png" alt="about" />
              </div>
            </center>
          </div>
          <Fotter />
        </div>
      </div>
    </>
  );
};

export default Landing;
