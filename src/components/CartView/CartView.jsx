import React, { useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartSummary from '../CartSummary/CartSummary'
import CartItem from '../CartItem/CartItem'
import { Button, Divider } from '@nextui-org/react'
import ItemCount from '../itemcount/ItemCount'
import DeleteIcon from '../DeleteIcon/DeleteIcon'

const CartView = () => {

    const { cart, updateItemQuantity, removeItem, cantidadTotal, precioTotal } = useContext(CartContext)
    const cambioCantidad = (itemId, nuevaCantidad) => {
      updateItemQuantity(itemId, nuevaCantidad)
    }

    if (cart.length === 0) {
        return (
            <h2>No hay productos en el carrito</h2>
        )
    } else {
        return (
            <div className='font-ubuntu'>
                <h1 className="text-3xl font-bold text-gray-800 text-center mt-5">Mi Carrito</h1>
                <div className='grid grid-cols-5 gap-10 mt-8'>
                    <div className="col-span-3 px-4">
                    {cart.map((item) => (
                    <>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1 flex gap-4 items-start">
                                    <CartItem key={item.id} item={item}/>
                                </div>
                                <div className="col-span-1 flex flex-col gap-4 items-center">
                                    <ItemCount stock={item.stock} inicial={item.quantity} cambioContador={(nuevaCantidad) => cambioCantidad(item.id, nuevaCantidad)} className="mt-6 font-semibold text-xs flex items-center gap-1 shrink-0" />
                                    <span>Stock Disponible: {item.stock}</span>
                                </div>
                                    <div className="col-span-1 flex justify-end" >
                                        <Button onClick={() => removeItem(item.id)} isIconOnly color="danger" aria-label="Borrar">
                                            <DeleteIcon />
                                        </Button>  
                                    </div>
                            </div>
                            <Divider className="my-4 mx-auto" />
                    </>
                    ))
                    }
                    </div>
                    <div className='p-4 mr-4 col-span-2'>
                        <CartSummary cantidadTotal={cantidadTotal} precioTotal={precioTotal}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartView