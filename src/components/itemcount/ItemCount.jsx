import { Button } from "@nextui-org/react";
import { useState } from "react";

const ItemCount = () => {

    const [contador, setContador] = useState(1);

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        contador > 1 ? setContador(contador - 1) : console.log("Minimo")
    }

    return(
        <div className="flex justify-center items-center font-ubuntu gap-2">
            <Button className="text-xl font-bold" onClick={restarContador}>-</Button>
            <p className="font-bold">{contador}</p>
            <Button className="text-xl font-bold" onClick={sumarContador}>+</Button>
        </div>
    );
}

export default ItemCount