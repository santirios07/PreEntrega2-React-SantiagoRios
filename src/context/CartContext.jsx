import { createContext, useState } from "react";

//Creamos el contexto
export const CartContext = createContext()

export const CartComponentContext = ({children})=> {

    const [cart, setCart] = useState([])


    //Funcion si esta en carrito
    const isInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }


    //Funcion agregar item al carrito
    const addItem = (product, count) => {
        if(isInCart(product)){
            setCart(cart.map(item => item.id ===product.id ? {...item, quantity: item.quantity + count} : item))
        }
        else{
            setCart([...cart, {...product, quantity:count}])
        }
    }

    //Funcion para actualizar cantidad
    const updateItemQuantity = (itemId, newQuantity) => {
        setCart(prevCart =>  prevCart.map(item => item.id === itemId ? { ...item, quantity: newQuantity } : item));
      };
    
    //Funcion para borrar item del carrito 
    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId))
    }

    //Cantidad de items en carrito
    const cantidadTotal = cart.reduce((acc, product) => acc + product.quantity, 0)

    //Total del monto del carrito
    const precioTotal = cart.reduce((acc, product) => acc + product.quantity * product.price, 0)

    return(
        <CartContext.Provider value={{cart, isInCart, addItem, updateItemQuantity, removeItem, cantidadTotal, precioTotal}}>
            {children}
        </CartContext.Provider>
    )

}