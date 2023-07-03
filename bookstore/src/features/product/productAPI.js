// A mock function to mimic making an async request for data

export function createProduct(item) {
    return new Promise(async(resolve) =>{
      const response = await fetch("http://localhost:5000/products",{
        method:"POST",
        body:JSON.stringify(item),
        headers:{'content-type':'application/json'}
      })
      const data = await response.json()
      resolve({data})
    }
    );
  }

  export function getProducts(product) {   
    return new Promise(async(resolve) =>{
      const response = await fetch("http://localhost:5000/products")
      const data = await response.json()
      resolve({data})
    }
    );
  }