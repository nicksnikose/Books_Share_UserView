// import {useState} from "react";
// function Counter({quantity}){
//   let [num, setNum]= useState(quantity);
//   let incNum =()=>{
//     if(num<10)
//     {
//     setNum(Number(num)+1);
//     }
//   };
//   let decNum = () => {
//      if(num>0)
//      {
//       setNum(num - 1);
//      }
//   }
//  let handleChange = (e)=>{
//    setNum(e.target.value);
//   }

//    return(
//     <>
//     <div className="mt-3">
//       <div class="input-group">
//         <div class="input-group-prepend">
//           <button className="btn btn-sm rounded mt-3  font-extrabold text-[20px] w-10 "style={{backgroundColor:'#D9D9D9'}} type="button" onClick={decNum}>-</button>
//         </div>
//      <input type="text" className="form-control rounded mt-3 mx-3 px-4 text-center " width={30} style={{backgroundColor:'#D9D9D9'}} value={num} onChange={handleChange}/>
//          <div className="input-group-prepend">
//            <button className="btn btn-sm rounded  mt-3 font-extrabold text-[20px] w-10 "style={{backgroundColor:'#D9D9D9'}} type="button" onClick={incNum}>+</button>
//         </div>
//      </div>
//   </div>
//    </>
//   );
// }

// export default Counter;