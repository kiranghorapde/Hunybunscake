import React, {  } from "react";
import { items } from "./DataCart/Data";

const Product = () => {

  return (
    <div className="  py-2 px-6 border-2 border-gray-300">
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 sm:gap-5 ">
        {items.map((product) => (
          <div
            key={product.id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img src={product.imgSrc} className="w-full" alt="product" />
            <div className=" py-1 ">
              <div className="font-bold sm:text-xl text-sm text-center ">
                {product.title}
              </div>
              <p className=" text-sm sm:text-xl  text-black bg-yellow-50 text-center">{product.description}</p>
            </div>
            <div className="  sm:py-2 flex justify-center  sm:gap-4">
              <span className="inline-bloc text-red-500  text-sm font-semibold">
                ₹ {product.price}
              </span>
              <button
                className="bg-yellow-500 hover:bg-blue-700 text-white font-bold sm:py-2 px-4 rounded"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
