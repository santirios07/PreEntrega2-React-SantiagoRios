import { Button } from "@nextui-org/react";
import { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(1);

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        contador > 1 ? setContador(contador - 1) : alert("No se puede restar menos de 1")
    }

    return(
        <div className="flex flex-col justify-center items-center font-ubuntu">
            <h2>Contador: {contador}</h2>
            <div className="flex gap-2 p-2">
                <Button onClick={sumarContador}>+</Button>
                <Button onClick={restarContador}>-</Button>
            </div>

        </div>
    );
}

export default Contador