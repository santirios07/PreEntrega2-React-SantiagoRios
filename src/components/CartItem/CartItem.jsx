import React from 'react'


const CartItem = ({item}) => {
  return (
    <>
        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 p-2 rounded-md">
            <img src={item.image} className="w-full h-full object-contain" />
         </div>

         <div className="flex flex-col">
            <h3 className="text-base font-bold text-gray-800">{item.title} </h3>
            <h4 className="text-lg mt-2 font-bold text-gray-800">${item.price * item.quantity} </h4>
        </div>
    </>
  )
}

export default CartItem