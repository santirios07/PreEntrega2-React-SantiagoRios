import React from 'react'
import CartWidget from '../cartwidget/cartwidget'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center w-full py-3 px-10 font-ubuntu bg-slate-200'>
       <h2 className='flex flex-grow basis-0 text-lg'>MAR INDUMENTARIA</h2>
        <ul className='flex flex-grow basis-0 gap-3 text-lg justify-center'>
            <li><a className='hover:text-slate-500' href="">INICIO</a></li>
            <li><a className='hover:text-slate-500' href="">PRODUCTOS</a></li>
            <li><a className='hover:text-slate-500' href="">CONTACTO</a></li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
  )
}

export default NavBar