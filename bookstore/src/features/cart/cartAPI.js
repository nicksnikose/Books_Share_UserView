// A mock function to mimic making an async request for data
export function addToCart(item) {
    return new Promise(async(resolve) =>{
      const response = await fetch("http://localhost:5000/cart/addcart",{
        method:"POST",
        body:JSON.stringify(item),
        headers:{'content-type':'application/json'}
      })
      const data = await response.json()
      console.log(data)
      resolve({data})
    }
    );
  }
  
  

  export function fetchItemsByUserId(userId){
    return new Promise(async(resolve) =>{
          const response = await fetch("http://localhost:5000/cart/addcart?user="+userId)
          const data = await response.json()
          console.log(data)
          resolve({data})
        }
        );
  }
  