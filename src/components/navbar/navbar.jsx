import React from 'react'
import CartWidget from '../cartwidget/cartwidget'

const NavBar = () => {
  return (
    <nav>
       <h2>MAR INDUMENTARIA</h2>
        <ul>
            <li><a href="">INICIO</a></li>
            <li><a href="">PRODUCTOS</a></li>
            <li><a href="">CONTACTO</a></li>
        </ul>
        <CartWidget> </CartWidget>
    </nav>
  )
}

export default NavBar