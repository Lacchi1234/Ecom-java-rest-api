// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Product from "./product";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.escuelajs.co/api/v1/products"
//       );
//       setProducts(response.data.slice(0, 20));
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div className="container py-5">
//       {/* <h2 className="text-center mb-4">Product Gallery</h2>

//       <div className="row">
//         {products.map((product) => (
//           <div key={product.id} className="col-md-3 mb-4">
//             <Product data={product} />
//           </div>
//         ))}
//       </div> */}

//     <div className="row">
//         {products.map((product) => (
//             <div key={product.id} className="col-lg-3 mb-4 d-flex">
//                 <div className="card shadow d-flex flex-column ">
//                     <img src={product.images[0]} alt={product.title} className="card-img-top" />
//                     <div className="card-body d-flex flex-column">
//                         <h5 className="card-title text-center">{product.title}</h5>
//                         <h2 className="text-center">${product.price}</h2>
//                         <a href="#" className="btn btn-primary mt-auto">Show Details</a>
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>


      
//     </div>



//   );
// };
// export default ProductList;



import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">All Products</h2>
      <div class="row">
        {
            products.map((product, index) => <Product key={index} data={product} />)
        }
      </div>
    </div>
  );
};
export default ProductList;
