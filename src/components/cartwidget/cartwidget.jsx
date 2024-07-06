import React, { useContext } from 'react'
import { Badge, Button } from '@nextui-org/react'
import CartIcon from '../carticon/CartIcon'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext)


  return (
    <div className='flex flex-grow basis-0 justify-end'>
      <Badge content={cantidadTotal} shape="circle" color="danger">
        <Button as={Link} to={"/cart"}
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