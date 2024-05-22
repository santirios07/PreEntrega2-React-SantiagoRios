import React from 'react'
import CartWidget from '../cartwidget/cartwidget'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center w-full py-3 px-10 font-ubuntu text-white'>
       <h2 className='flex flex-grow basis-0 text-lg'> <a className='hover:scale-105 hover:text-gray-300' href="">Mar Indumentaria</a></h2>
        <ul className='flex flex-grow basis-0 gap-3 text-lg justify-center'>
            <li><a className='hover:text-gray-300' href="">Inicio</a></li>
            <li><a className='hover:text-gray-300' href="">Productos</a></li>
            <li><a className='hover:text-gray-300' href="">Contacto</a></li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
  )
}

export default NavBar