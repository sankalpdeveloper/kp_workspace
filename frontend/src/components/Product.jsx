import React, {useState,useEffect} from "react";
import ModelButton from "./reusable/ModelButton";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  
  const baseUrl = 'http://127.0.0.1:5000/product/getproduct'
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.post(baseUrl,params).then((response)=>{
      console.log(response.data)
        setProduct(response.data)
    })
  }, [params])
  return (
    <>
      <div x-data="{ cartOpen: false , isOpen: false }" className="bg-white" key={product.id}>
        
        <main className="my-8">
          <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
              <div className="w-full h-64 md:w-1/2 lg:h-96">
                <img
                  className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                  src={product.image_url}
                  alt={product.item_name}
                />
              </div>
              <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                <h3 className="text-gray-700 uppercase text-lg">{product.item_name}</h3>
                <span className="text-gray-500 mt-3">Price: ₹{product.item_price}</span>
                <hr className="my-3" />
                <div className="flex items-center mt-6">
                  <ModelButton />
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-200">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a
              href="/"
              className="text-xl font-bold text-gray-500 hover:text-gray-400"
            >
              KP
            </a>
            <p className="py-2 text-gray-500 sm:py-0">© All rights reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Product;
