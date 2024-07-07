import { Button, Divider, Input} from '@nextui-org/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import OrderItem from '../OrderItem/OrderItem'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/client'

const Order = () => {
    
    const {cantidadTotal, precioTotal, cart, clearCart} = useContext(CartContext)

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [idCompra, setIdCompra] = useState()

    const finalizarCompra = () => {
        const items = cart.map(item => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price,
          }));


        const data ={
            buyer: 
                {name,
                phone,
                email
            },
            items,
            total: precioTotal
        }

        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, data).then(({id}) => setIdCompra(id))

        setTimeout(() => {
            clearCart()
        },15000)
    }

    if(cart.length === 0){
        return(
            <div className='mt-16 flex flex-col justify-center items-center font-ubuntu text-lg'>
                <h2>No hay productos en el carrito</h2>
                <Button as={Link} to={"/"} className='bg-teal-700 text-white my-4 font-semibold'>Volver al Catálogo</Button>
            </div>
        )
    }else if(idCompra){
        return(
            <div className='mt-16 flex flex-col justify-center items-center font-ubuntu text-lg'>
                <h2>Muchas Gracias por su compra <strong className='text-teal-700'>{name}</strong>!</h2>
                <h3>ID de Compra: <span className='font-bold'>{idCompra}</span>.</h3>
                <h3>Cantidad de Productos: <span className='font-bold'>{cantidadTotal}</span>.</h3>
                <h3>Total de Compra: <span className='font-bold'>${precioTotal}</span>.</h3>
                <Button as={Link} to={"/"} className='bg-teal-700 text-white my-4 font-semibold'>Volver al Inicio</Button>
            </div>
        )
    } else{
        return (
              <>
                  <h3 className="text-2xl font-ubuntu font-bold text-center text-gray-800 p-4">Orden de Compra</h3>
                  <div className="rounded-md py-4 px-10 h-max grid grid-cols-4 font-ubuntu">
                      <form className="mt-6 col-span-2 h-max">
                          <div className='flex flex-col justify-center mx-2'>
                              <h3 className="text-base text-gray-800  font-semibold mb-4">Ingrese sus datos</h3>
                              <div className=" grid grid-cols-2 justify-center gap-6">
                                      <Input isRequired type="text" label="Nombre" variant="bordered" placeholder="Nombre completo" className="max-w-xs font-bold py-2" onChange={(e) => setName(e.target.value)} />
                                  
                                      <Input isRequired type="email" label="Email" variant="bordered" placeholder="Ingrese su email" className="max-w-xs font-bold py-2" onChange={(e) => setEmail(e.target.value)} />
                                  
                                      <Input isRequired type="number" label="Teléfono" variant="bordered" placeholder="Ingrese su teléfono" className="max-w-xs font-bold py-2" onChange={(e) => setPhone(e.target.value)} />
                              </div>
                          </div>
                      </form>
                      <div className='col-span-2 flex flex-col justify-center items-center mx-auto h-max bg-teal-50 p-6 rounded-md'>
                          <h3 className='font-bold text-xl '>Detalle:</h3>
                          <Divider className='my-2'/>
                          {cart.map((item) => (
                              <OrderItem key={item.id} item={item} />
                          ))}
                          <div className="text-gray-800 mt-6 flex flex-col items-center text-md">
                              <p className="flex flex-wrap gap-4 ">Cantidad de productos: {cantidadTotal}</p>
                              <Divider/>
                              <p className="flex flex-wrap gap-4 font-bold">Total: ${precioTotal}</p>
                          </div>
      
                          <div className="mt-6 flex gap-4 items-center">
                              <Button onClick={() => finalizarCompra()} type="button" className="px-10 py-2.5 tracking-wide bg-teal-700 hover:bg-teal-900 text-white rounded-md">Comprar</Button>
                              <Button as={Link} to={"/cart"} type="button" className="px-10 py-2.5 tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Volver al Carrito</Button>
                          </div>
      
                      </div>
                  </div>
              </>
        )
    }
}

export default Order