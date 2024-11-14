import React from 'react';
import { IoTrashOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../Features/Cart';

const Favourites = () => {
    const { Products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className='w-[85%] ms-[100px]'>
            <div className='text-xl font-bold border-b-[1px] ps-10 pb-4 pt-10'>Inhouse Products</div>
            <div className='mx-10 mt-10'>
                <div className='font-bold flex justify-between border-[1px] h-16 mb-10 items-center relative'>
                    <p className='absolute left-[1rem]'>Product</p>
                    <p className='absolute left-[18rem]'>Name</p>
                    <p className='absolute left-[30rem]'>Unit Price</p>
                    <p className='absolute left-[42rem]'>SubTotal</p>
                    <p className='absolute left-[58rem]'>Quantity</p>
                    <p className='absolute'></p>
                </div>
                {Products.length === 0 ? (
                    <div className="text-center text-2xl font-bold">No Item</div>
                ) : (
                    Products.map((product, i) => (
                        <div key={i} className='flex justify-between items-center mb-10 shadow-md'>
                            <span className='flex justify-center items-center w-32 h-28 p-5'>
                                <img className='w-full h-full object-contain' src={product.image} alt={product.name} />
                            </span>
                            <span>{product.name}</span>
                            <span>${product.price}</span>
                            <span>${(product.price * product.quantity).toFixed(2)}</span>
                            <span className='flex justify-center items-center gap-8'>
                                <span className='bg-gray-200 w-10 h-10 flex items-center justify-center font-bold text-xl cursor-pointer' onClick={() => dispatch(decrementQuantity(product.id))}>-</span>
                                <span>{product.quantity}</span>
                                <span className='bg-gray-200 w-10 h-10 flex items-center justify-center font-bold text-xl cursor-pointer' onClick={() => dispatch(incrementQuantity(product.id))}>+</span>
                            </span>
                            <span><IoTrashOutline className='cursor-pointer text-xl me-4' onClick={() => dispatch(removeFromCart(product.id))} /></span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Favourites;