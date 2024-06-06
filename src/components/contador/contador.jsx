import { Button } from "@nextui-org/react";
import { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(1);

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        contador > 1 ? setContador(contador - 1) : console.log("No se puede restar de 1")
    }

    return(
        <div className="flex justify-center items-center font-ubuntu gap-2 p-2">
            <Button onClick={sumarContador}>+</Button>
            <p>{contador}</p>
            <Button onClick={restarContador}>-</Button>
        </div>
    );
}

export default Contador