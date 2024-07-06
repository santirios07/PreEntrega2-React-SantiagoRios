import { Button } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CartSummary = ({cantidadTotal, precioTotal}) => {
  return (
        <div className="bg-teal-50 rounded-md p-4 h-max">
            <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">Orden de Compra</h3>

            <form className="mt-6">
                <div>
                    <h3 className="text-base text-gray-800  font-semibold mb-4">Ingrese sus datos</h3>
                    <div className="space-y-3">
                        <div className="relative flex items-center">
                            <input type="text" placeholder="Nombre Completo"
                                className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none" />
                        </div>

                        <div className="relative flex items-center">
                            <input type="email" placeholder="Email"
                                className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none" />
                        </div>
                        <div className="relative flex items-center">
                            <input type="number" placeholder="Numero de teléfono"
                                className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none" />
                        </div>
                    </div>
                </div>
            </form>

            <ul className="text-gray-800 mt-6 space-y-3">
                <li className="flex flex-wrap gap-4 text-sm">Cantidad de productos <span className="ml-auto font-bold">{cantidadTotal}</span></li>
                <hr className="border-gray-300" />
                <li className="flex flex-wrap gap-4 text-sm font-bold">Total: <span className="ml-auto">${precioTotal}</span></li>
            </ul>

            <div className="mt-6 space-y-3">
                <Button as={Link} to={"/order/"} type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-teal-700 hover:bg-teal-900 text-white rounded-md">Finalizar Compra</Button>
                <Button as={Link} to={"/"} type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Volver al Catálogo</Button>
            </div>
        </div>
  )
}

export default CartSummary