import React from 'react'

const OrderItem = ({item}) => {
  return (
    <div className='flex gap-2'> 
        <p>-{item.title}</p>
        <p> x {item.quantity}</p>
        <p>= ${item.quantity * item.price}</p>
    </div>
  )
}

export default OrderItem