import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  AiOutlineShoppingCart
} from "react-icons/ai";



function Products() {
  // console.log(process.env.B);
  const baseUrl = 'http://127.0.0.1:5000/product/getall'
const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get(baseUrl).then((response)=>{
        setProduct(response.data)
    })
  }, [])
  return (
    <>
      <Container>
        <div className="mt-16">
          <h3 className="text-gray-600 text-2xl font-medium">Our Products</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {product.map((productitem) => {
              const {_id,image_url,item_name,item_price} = productitem
              return (
                <Link to={`/product/${_id}`}>
               
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" key={_id}>
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{
                      backgroundImage:
                        `url(${image_url})`,
                    }}
                  >
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                     <Link to={`/product/${_id}`}>
                       <AiOutlineShoppingCart/>
                     </Link>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">{item_name}</h3>
                    <span className="text-gray-500 mt-2">Price: ₹{item_price}</span>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Products;
