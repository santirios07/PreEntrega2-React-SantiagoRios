import React, { useContext,} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Button, Divider } from '@nextui-org/react'
import ItemCount from '../itemcount/ItemCount'
import DeleteIcon from '../DeleteIcon/DeleteIcon'
import { Link } from 'react-router-dom'

const CartView = () => {

    const { cart, updateItemQuantity, removeItem, cantidadTotal, precioTotal } = useContext(CartContext)
    const cambioCantidad = (itemId, nuevaCantidad) => {
      updateItemQuantity(itemId, nuevaCantidad)
    }

    if (cart.length === 0) {
        return (
            <div className='mt-16 flex flex-col justify-center items-center font-ubuntu text-lg'>
                <h2>No hay productos en el carrito</h2>
                <Button as={Link} to={"/"} className='bg-teal-700 text-white my-4 font-semibold'>Volver al Catálogo</Button>
            </div>
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
                                    <ItemCount  stock={item.stock} inicial={item.quantity} cambioContador={(nuevaCantidad) => cambioCantidad(item.id, nuevaCantidad)} className="mt-6 font-semibold text-xs flex items-center gap-1 shrink-0" />
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
                    <div className="bg-teal-50 rounded-md p-8 h-max col-span-2 mr-4">
                        <ul className="text-gray-800 mt-6 space-y-3">
                            <li className="flex gap-4 text-sm">Cantidad de productos: <span className="font-bold">{cantidadTotal}</span></li>
                            <Divider/>
                            <li className="flex flex-wrap gap-4 text-sm font-bold">Total: <span className="ml-auto">${precioTotal}</span></li>
                        </ul>

                        <div className="mt-6 space-y-3">
                            <Button as={Link} to={"/order"} type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-teal-700 hover:bg-teal-900 text-white rounded-md">Finalizar Compra</Button>
                            <Button as={Link} to={"/"} type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Seguir Comprando</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartView