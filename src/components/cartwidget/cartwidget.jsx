import React from 'react'
import { Badge, Button } from '@nextui-org/react'
import CartIcon from '../carticon/carticon'


const CartWidget = () => {
  return (
    <div className='flex flex-grow basis-0 justify-end'>
      <Badge content="0" shape="circle" color="danger">
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