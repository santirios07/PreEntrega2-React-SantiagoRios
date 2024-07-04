import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = () => {

   const {contador, sumarContador, restarContador} = useContext(CartContext)

    return(
        <div className="flex justify-center items-center font-ubuntu gap-2">
            <Button className="text-xl font-bold" onClick={restarContador}>-</Button>
            <p className="font-bold">{contador}</p>
            <Button className="text-xl font-bold" onClick={sumarContador}>+</Button>
        </div>
    );
}

export default ItemCount