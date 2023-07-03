import { MdGpsFixed } from "react-icons/md";
import { Select, Option, Button } from "@material-tailwind/react";

const Address = () => {
  return (
    <>

      <div className="p-10 lg:rounded-lg border  border-black">
        <h3 className="lg:text-[28px] text-[24px] ">Add a New Address </h3>
        <div className="flex bg-[#81A356] my-5 p-2 w-56 rounded-md  text-white cursor-pointer">
          <MdGpsFixed className="me-3 mt-1 " /> Use my current Location
        </div>
        <form
          action=""
          className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6"
        >
          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              Full Name <br />
            </label>
            <input
              type="text" id=""
              className="w-full border border-black rounded ps-2 "
            />
          </div>


          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              Mobile No. <br />
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>
          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              Pincode <br />
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>

          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              Locality <br />
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>
        </form>

        <div className="lg:text-[24px] text-[20px]">
          <label htmlFor="">Address (Area and street )</label>
          <textarea
            name=""
            id=""
            cols=""
            rows="6"
            className="w-full grid lg:grid-cols-1 grid-cols-1 border border-black rounded ps-2"
          ></textarea>
        </div>

        <form
          action=""
          className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6"
        >
          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              City/District/Town
              <br />
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>

          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">State </label>
            <div className="flex w-full flex-col gap-6">
              <Select
                label="select state"
                color="black"
                className="  border rounded "
              >
                <Option>Nagpur </Option>
                <Option>Wardha </Option>
                <Option>Yavatmad </Option>
                <Option>Nashik </Option>
                <Option>Amaravti </Option>
              </Select>
            </div>
          </div>
          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              Landmark (Optional) <br />
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>

          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              Alternate Mob. No. <br />
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>
          <div className="lg:text-[24px] text-[20px]">
            <h2 className="font-bold pb-3">Address Type</h2>
            <input
              type="radio"
              className="lg:text-[20px] text-[16px] lg:mt-2"
              name="ggg"
            />{" "}
            Home All Day Delivery
          </div>
          <div className="lg:text-[24px] text-[20px] lg:mt-10">
            <input
              type="radio"
              className="lg:text-[20px] text-[16px]"
              name="ggg"
            />{" "}
            Work (Delivery Between 10 Am - 5 Pm)
          </div>
        </form>

        <div className="py-5 grid lg:grid-cols-2 grid-cols-1 ">
          <Button
            className="bg-[#81A356] lg:w-80 lg:text-[20px] text-[16px]"
            color="green"
          >
            Save and Deliver Here
          </Button>
          <Button
            variant="outlined"
            className=" border-black text-[red] font-semibold items-center lg:text-[20px] text-[16px] lg:w-32 mt-2 lg:mt-0"
            color="red"
          >
            {" "}
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default Address;
