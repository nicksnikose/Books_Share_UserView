import { whyyou } from "../utilities";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,

} from "@material-tailwind/react";
const Whyyou = () => {
  return (
    <section className=" p-[20px] text-center">
   <h1 className="text-[36px] ">You Are Here For ?</h1>
    <div className=" mt-[10px] flex lg:flex-row
   flex-col min-h-[70vh] gap-5" >
{
    whyyou.map((item)=>{
 // eslint-disable-next-line react/jsx-key
 return  <div className="justify-between mx-auto p-7"   key={item.title} > 
 <Card
      shadow={false}
      className="  grid lg:h-[25rem]  h-[28rem] w-full lg:w-[410px]   overflow-hidden text-center"
    
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{'--image-url': `url(/${item.img})`}} 
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
        <Typography variant="h5" className="mb-7 text-gray-400">
          {item.subtitle}
        </Typography>
        <button
      className=" outline-none   font-extrabold   text-white  ">
        {item.btn}
      </button>
      </CardBody>
    </Card>
  </div>
})
}
    </div>
    </section>
  )
}
export default Whyyou