import React , {useState} from 'react';
import axios from "axios";

function AddProduct() {

  const baseUrl = 'http://127.0.0.1:5000/product/addproduct'
  const AddProduct = (e)=> {
     e.preventDefault()
    const item_name = document.getElementById('item_name').value
    const item_category = document.getElementById('item_category').value
    const item_price = document.getElementById('item_price').value
    const image_url = document.getElementById('image_url').value
    console.log(item_name, item_category, item_price, image_url);
    let data = {
      "item_name":item_name,
      "item_category":item_category,
      "item_price":item_price,
      "image_url":image_url,
    }
    axios.post(baseUrl,data).then((response)=>{
      console.log(response.data)
    })
  }
  
  return (
    <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Add Product Information</h3>
          {/* <p class="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p> */}
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">Item name</label>
                  <input type="text" name="item_name" id="item_name"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">Item category</label>
                  <input type="text" name="item_category" id="item_category" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  
                <div class="col-span-6 sm:col-span-4">
                  <label for="email_address" class="block text-sm font-medium text-gray-700">Item Price</label>
                  <input type="number" name="item_price" id="item_price" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="email_address" class="block text-sm font-medium text-gray-700">Image Url</label>
                  <input type="text" name="image_url" id="image_url" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={AddProduct}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default AddProduct;
