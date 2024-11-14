import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { FaHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Cart } from '../Features/Cart';
import StarRating from './StarRating';
import { current } from '@reduxjs/toolkit';

const Products = ({ selectedCategory, searchQuery }) => {
  const [modalImage, setModalImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10); 
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const dispatch = useDispatch();

  const { totalProducts: products } = useSelector((state) => state.cart);

  const openModal = (image) => {  
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleAddToCart = (product) => {
    dispatch(Cart(product)); 
  };

  const handleToggleFavorite = (productId) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const handleViewMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 10, products.length)); 
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);

  return (
    <div className='ms-28 me-36 mt-28 mb-28'>
      <div className='flex items-center gap-3 mt-20'>
        <span className='w-4 rounded h-9 bg-red-500 text-red-500'></span>
        <h3 className='text-sm font-bold text-red-500'>Our Products</h3>
      </div>
      <div className='mt-3 mb-16'>
        <h1 className='font-bold text-3xl'>Explore Our Products</h1>
      </div>
      <div className='grid grid-cols-5 gap-6'>
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div key={product.id} className='product cursor-pointer'>
            <div className='bg-white ring-[0.1px] ring-black rounded w-[240px] h-[240px] flex flex-col justify-center overflow-hidden items-center relative group'>
              <Link to={`/details/${product.id}`}>
                <img src={product.image} className='w-[120px]' alt={product.name} />
                <div className='flex flex-col gap-2 absolute right-[103px] top-[80px]'>
                  <span
                    onClick={(e) => {
                      e.preventDefault(); 
                      handleToggleFavorite(product.id);
                    }}
                    className={`w-8 h-8 text-xl flex justify-center items-center bg-black rounded-full relative -right-[95px] cursor-pointer -top-[70px] ${
                      favoriteProducts.includes(product.id) ? 'text-red-500' : 'text-white'
                    }`}>
                    <FaHeart className='text-[15px]'/>
                  </span>
                  <span
                    onClick={(e) => {
                      e.preventDefault(); 
                      openModal(product.image);
                    }}
                    className='bg-black text-white w-8 h-8 text-xl flex justify-center items-center rounded-full relative -right-[95px] cursor-pointer -top-[70px]'>
                    <MdOutlineRemoveRedEye />
                  </span>
                </div>
              </Link>
              <div
                onClick={() => handleAddToCart(product)}
                className='text-white bg-black flex justify-center items-center w-full h-10 absolute bottom-[-40px] group-hover:bottom-0 transition-all duration-500 cursor-pointer'>
                Add To Cart
              </div>
            </div>
            <div className='flex flex-col mt-2'>
              <span className='font-semibold'>{product.name}</span>
              <span className='text-red-500 flex gap-2'>
                ${product.price}
                <span className='text-gray-400'>
                  <del>${product.oldprice}</del>
                </span>
              </span>
              <div className='mt-2'>
                <StarRating rating={product.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <div className='flex justify-center mt-10'>
          <button
            onClick={handleViewMore}
            className='view-more-btn bg-red-500 py-3 px-6 text-white rounded text-sm'>
            View More
          </button>
        </div>
      )}
      {modalImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="relative bg-white w-[420px] h-[420px] flex justify-center items-center overflow-hidden rounded">
            <img src={modalImage} alt="Modal" className="max-h-[500px]"/>
            <button
              className="absolute top-2 right-2 bg-red-500 px-5 text-white p-1 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
