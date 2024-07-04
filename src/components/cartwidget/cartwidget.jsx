import React, { useContext } from 'react'
import { Badge, Button } from '@nextui-org/react'
import CartIcon from '../carticon/CartIcon'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {
  const {cart} = useContext(CartContext)

 
  const cantidad = cart.reduce((acc, product) => acc + product.quantity, 0)


  return (
    <div className='flex flex-grow basis-0 justify-end'>
      <Badge content={cantidad} shape="circle" color="danger">
        <Button
          radius="full"
          isIconOnly
          variant="light"
        >
          <CartIcon></CartIcon>
        </Button>
      </Badge>
    </div>
  )
}

export default CartWidget