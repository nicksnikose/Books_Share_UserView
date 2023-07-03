import Hero from "../components/Hero";
import Whyyou from "../components/Whyyou";
import Howit from "../components/Howit";
import Fotter from "../components/Fotter";
import About from "../components/About";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:mt-14 mt-20">
        <div >
          <Hero />
        </div>
        <div>
          <Whyyou />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Howit />
        </div>
        <div>
          <Fotter />
        </div>
      </div>
    </div>
  );
};
export default Landing;
