import { createContext, useState } from "react";

//Creamos el contexto
export const CartContext = createContext()

export const CartComponentContext = ({children})=> {

    const [cart, setCart] = useState([])
    const [contador, setContador] = useState(1);


    const addItem = (product) => {
        const isInCart = cart.find(item => item.id === product.id)
        
        isInCart ? setCart(cart.map(item => item.id ===product.id ? {...item, quantity: item.quantity + contador} : item)) : setCart([...cart, {...product, quantity:contador}])
    }

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        contador > 1 ? setContador(contador - 1) : ""
    }




    return(
        <CartContext.Provider value={{cart, addItem, sumarContador, restarContador, contador}}>
            {children}
        </CartContext.Provider>
    )

}