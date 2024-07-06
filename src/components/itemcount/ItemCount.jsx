import { Button } from "@nextui-org/react";
import { useState } from "react";

const ItemCount = ({stock, inicial, cambioContador}) => {


    const [contador, setContador] = useState(inicial);
   

    //Funciones  sumar  y restar contador
    const sumarContador = () => {
        if(contador < stock) {
         const nuevoContador = contador + 1   
        setContador(nuevoContador)
        cambioContador(nuevoContador)
        }
    }

    const restarContador = () => {
        if(contador > 1){
            const nuevoContador = contador - 1
            setContador(nuevoContador)
            cambioContador(nuevoContador)
        }
    }


    return(
        <div className="flex justify-center items-center font-ubuntu gap-2">
            <Button className="text-xl p-2 font-bold" onClick={restarContador}>-</Button>
            <p className="font-bold">{contador}</p>
            <Button className="text-xl font-bold" onClick={sumarContador}>+</Button>
        </div>
    );
}

export default ItemCount