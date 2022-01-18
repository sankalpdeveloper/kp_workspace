import React, {useState,useEffect} from "react";
import ModelButton from "./reusable/ModelButton";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const baseUrl = 'http://127.0.0.1:5000/product/getproduct'

function Product() {
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.post(baseUrl,params).then((response)=>{
      console.log(response.data)
        setProduct(response.data)
    })
  }, [])
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
                  alt="Nike Air"
                />
              </div>
              <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                <h3 className="text-gray-700 uppercase text-lg">{product.item_name}</h3>
                <span className="text-gray-500 mt-3">Price: ₹{product.item_price}</span>
                <hr className="my-3" />
                <div className="mt-2">
                  <label className="text-gray-700 text-sm" htmlFor="count">
                    Count:
                  </label>
                  <div className="flex items-center mt-1">
                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                    <span className="text-gray-700 text-lg mx-2">1</span>
                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

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
