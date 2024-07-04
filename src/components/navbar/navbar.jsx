import React from 'react'
import CartWidget from '../cartwidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-teal-700 drop-shadow-lg">
      <div className='flex justify-between items-center w-full py-3 px-10 font-ubuntu text-white'>
        <Link className='flex flex-grow basis-0 ' to={"/"}>
          <h2 className='text-lg hover:scale-105 hover:text-gray-300 duration-150'>Mar Indumentaria</h2>
        </Link>
        <ul className='flex flex-grow basis-0 gap-4 text-lg justify-center'>
            <Link to={"/"}>
              <li className='hover:text-gray-300 duration-150'>Inicio</li>
            </Link>
            <Link to={"/category/men's clothing"}>
              <li className='hover:text-gray-300 duration-150'>Ropa de Hombre</li>
            </Link>
            <Link to={"/category/women's clothing"}>
              <li className='hover:text-gray-300 duration-150'>Ropa de Mujer</li>
            </Link>
            <Link to={"/category/jewelery"}>
              <li className='hover:text-gray-300 duration-150'>Joyas</li>
            </Link>
        </ul>
        <CartWidget></CartWidget>
      </div>
    </nav>
  )
}

export default NavBar