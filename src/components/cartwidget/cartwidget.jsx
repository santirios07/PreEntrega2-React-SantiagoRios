import React from 'react'
import { Badge, Button } from '@nextui-org/react'

const CartWidget = () => {
  return (
    <Badge content="0" shape="circle" color="danger">
      <Button
        radius="full"
        isIconOnly
        aria-label="more than 99 notifications"
        variant="light"
      >
       
      </Button>
    </Badge>
  )
}

export default CartWidget