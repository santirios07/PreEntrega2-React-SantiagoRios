import React, { useContext, useState } from 'react'
import { Button } from '@nextui-org/react'
import ItemCount from '../itemcount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({detail}) => {

  const {addItem} = useContext(CartContext)
  
  const [cantidad, setCantidad] = useState(1)

  const cambioCantidad = (nuevaCantidad) => {
    setCantidad(nuevaCantidad)
  }

  const addToCart = (cantidad) =>{
    addItem(detail, cantidad)
  }


  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white font-ubuntu">
    <div className="container px-8 py-10 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={detail.image}/>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <p className="text-sm text-gray-500">{detail.category}</p>
          <h2 className="text-muted text-3xl font-medium mb-1">{detail.title}</h2>
          <p className="leading-relaxed py-2">{detail.description}</p>
          <p className="text-sm text-gray-500">Stock disponible: {detail.stock}</p>
          <span className="font-medium text-2xl text-gray-900">${detail.price}</span>
          <div className="flex py-2">
            <ItemCount stock={detail.stock} inicial={1} cambioContador={cambioCantidad}/>
            <Button onClick={() => {addToCart(cantidad)}} className="ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded">Agregar al carrito</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ItemDetail