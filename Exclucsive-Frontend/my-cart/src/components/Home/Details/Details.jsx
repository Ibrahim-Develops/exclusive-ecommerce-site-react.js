import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { AiFillTruck } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
import StarRating from '../Products/StarRating';
import { incrementQuantity, decrementQuantity } from '../Features/Cart';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { totalProducts: products, display_products } = useSelector((state) => state.cart);

  const product = products.find((p) => p.id === parseInt(id));
  const productImages = display_products.find((dp) => dp.id === product?.id) || {};

  const [mainImage, setMainImage] = useState(product ? product.image : '');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(product?.quantity || 0);

  useEffect(() => {
    if (product && product.image) {
      setMainImage(product.image); 
    }
  }, [product]);

  const handleToggle = (size) => {
    setSelectedSize(size);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      dispatch(decrementQuantity(product.id));
    }
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);  
  };

  return (
    <div className="details-page flex justify-center mt-16 mb-16">
      {product ? (
        <div className="flex gap-12 w-[80%]">
          <div className="flex gap-6">
            <div className="flex flex-col gap-4">
              <span className="bg-gray-100 w-[140px] h-[120px] overflow-hidden flex justify-center items-center p-2 cursor-pointer" onClick={() => handleThumbnailClick(product.image)}>
                <img src={product.image} className="w-[70%]" alt={`${product.name} preview`} />
              </span>
              {Object.values(productImages).slice(1, 4).map((img, index) => (
                <span key={index} className="bg-gray-100 w-[140px] overflow-hidden h-[120px] flex justify-center items-center p-2 cursor-pointer" onClick={() => handleThumbnailClick(img)}>
                  <img src={img} className="w-[70%]" alt={`${product.name} preview`} />
                </span>
              ))}
            </div>

            <div className="bg-gray-100 w-[500px] overflow-hidden h-[526px] flex justify-center items-center">
              <img src={mainImage} alt={product.name} className="object-contain w-[350px]" />
            </div>
          </div>

          <div className="flex flex-col w-[340px]">
            <div className="flex flex-col gap-2 pb-5 border-b border-gray-300 mb-6">
              <h1 className="font-bold text-2xl">{product.name}</h1>
              <div><StarRating /></div>
              <h2 className="text-lg font-semibold">${product.price}</h2>
              <p className="text-gray-600 text-sm">{product.about}</p>
            </div>

            <div className="flex gap-4 mb-6">
              <h3 className="text-sm font-semibold">Size:</h3>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <span
                    onClick={() => handleToggle(size)}
                    key={size}
                    className={`flex justify-center items-center rounded-sm cursor-pointer text-sm border border-gray-400 w-8 h-8 
                      ${selectedSize === size ? 'bg-red-500 text-white border-transparent duration-300' : 'text-gray-800'}`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
                <button
                  className="bg-red-500 text-white w-10 h-10 flex justify-center items-center"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="px-4 text-lg">{quantity}</span>
                <button
                  className="bg-red-500 text-white w-10 h-10 flex justify-center items-center"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
              <button className="bg-red-500 text-white w-40 h-10 rounded-md">Buy Now</button>
              <button className="border border-gray-300 w-10 h-10 flex justify-center items-center rounded-md">
                <FaHeart className="text-gray-500" />
              </button>
            </div>

            <div className="border border-gray-300 rounded-md">
              <div className="flex items-center p-4 border-b border-gray-300">
                <AiFillTruck className="text-2xl text-gray-700 mr-4" />
                <div>
                  <h4 className="font-medium">Free Delivery</h4>
                  <p className="text-xs text-gray-500 underline">Enter your postal code for delivery availability</p>
                </div>
              </div>
              <div className="flex items-center p-4">
                <GiReturnArrow className="text-2xl text-gray-700 mr-4" />
                <div>
                  <h4 className="font-medium">Return Delivery</h4>
                  <p className="text-xs text-gray-500 underline">Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Details;
