"use client";
import { useState } from 'react'
import Link from "next/link";
import { ProductType, StateProps } from "../../type";
import Image from "next/image";
import { Heart, ShoppingBasket, ShoppingCart } from "lucide-react";
import FormattedPrice from "./FormattedPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite } from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";

interface Item {
  products: ProductType[];
  prefix: string
}

const Product = ({ products, prefix }: Item) => {
  const { favoriteData } = useSelector((state: StateProps) => state.pro);
  const isFavorite = (productId: any) => {
    return favoriteData.some((favoriteItem) => favoriteItem.id === productId);
  };
  const dispatch = useDispatch();
  return (
    <div className="max-h-[800px] flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mx-auto">
        {products?.map((item) => (
          // <div
          //   key={`${item.id}_${item.title}`}
          //   className="relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-400 duration-300 hover:shadow-xl overflow-hidden rounded-md"
          // >
          //   <Link href={{ pathname: `/id_${item?.id}`, query: { id: item?.id, prefix: item?.category } }}>
          //     <div className="aspect-w-2 aspect-h-3">
          //       <img
          //         src={item?.image}
          //         alt="Product image"
          //         className="object-cover object-center w-full h-full group-hover:scale-105 duration-300"
          //       />
          //     </div>
          //   </Link>
          //   <div className="absolute top-2 right-2 flex items-center space-x-2">
          //     <Heart
          //       fill={isFavorite(item.id) ? 'red' : 'black'}
          //       onClick={() => {
          //         dispatch(addToFavorite(item));
          //         if (isFavorite(item?.id)) {
          //           toast.error(`${item?.title} removed from favorites!`);
          //         } else {
          //           toast.success(`${item?.title} added to favorites!`);
          //         }
          //       }}
          //       className="text-zinc-500 w-5 h-5 cursor-pointer duration-200 hover:text-black"
          //     />
          //     <ShoppingCart
          //       onClick={() => {
          //         dispatch(addToCart(item));
          //         toast.success(`${item?.title} is added to Cart!`);
          //       }}
          //       className="text-zinc-500 w-5 h-5 cursor-pointer duration-200 hover:text-black"
          //     />
          //   </div>
          //   <div className="p-4">
          //     <p className="whitespace-nowrap text-ellipsis overflow-hidden group-hover:text-designColor duration-300 font-bold">
          //       {item?.title}
          //     </p>
          //     <p className="text-designColor font-semibold">
          //       <FormattedPrice amount={item?.price} />
          //     </p>
          //     <div className="flex items-center justify-between mt-2">
          //       <button
          //         onClick={() => {
          //           dispatch(addToCart(item));
          //           toast.success(`${item?.title} is added to Cart!`);
          //         }}
          //         className="uppercase font-semibold text-white bg-designColor py-2 px-4 rounded-full hover:bg-opacity-80 duration-300"
          //       >
          //         Add to Cart
          //       </button>
          //     </div>
          //   </div>
          // </div>
          <div key={`${item.id}_${item.title}`} className="relative group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href={{ pathname: `/id_${item?.id}`, query: { id: item?.id, prefix: item?.category } }}>
              <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
              <img className="peer absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
              <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
              <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              <FormattedPrice amount={item?.previousPrice - item?.price} /> OFF</span>
            </Link>
            <div className="absolute top-2 right-2 flex items-center space-x-2">
              <Heart
                fill={isFavorite(item.id) ? 'red' : 'black'}
                onClick={() => {
                  dispatch(addToFavorite(item));
                  if (isFavorite(item?.id)) {
                    toast.error(`${item?.title} removed from favorites!`);
                  } else {
                    toast.success(`${item?.title} added to favorites!`);
                  }
                }}
                className="text-zinc-500 w-5 h-5 cursor-pointer duration-200 hover:text-black"
              />
            </div>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">{item.title}</h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900"><FormattedPrice amount={item?.price} /></span>
                  <span className="text-sm text-slate-900 line-through"><FormattedPrice amount={item.previousPrice} /></span>
                </p>
              </div>
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  toast.success(`${item?.title} is added to Cart!`);
                }}
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#000',
            color: '#fff',
          },
        }}
      />
    </div>


  );
};

export default Product;
