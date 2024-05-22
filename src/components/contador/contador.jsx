import { Button } from "@nextui-org/react";
import { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(1);

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        contador > 1 ? setContador(contador - 1) : alert("No se puede restar más")
    }


    return(
        <div className="flex flex-col justify-center items-center">
            <h2>Contador: {contador}</h2>
            <div>
                <Button onClick={sumarContador}>+</Button>
                <Button onClick={restarContador}>-</Button>
            </div>

        </div>
    );
}

export default Contador