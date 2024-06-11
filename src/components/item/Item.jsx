import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"

const Item = ({id, title, price, image}) => {
  return (
    <div className="px-8 py-5 content-center bg-teal-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer font-ubuntu">
      <img src={image} alt=""/>
      <h3 className="text-xl my-5">{title}</h3>
      <h4 className="text-lg font-semibold mb-5">${price}</h4>
      <Link to={`/products/${id}`}>
        <Button className="py-2 px-6 bg-teal-500 text-white rounded-md hover:bg-teal-600">Ver Detalles</Button>
      </Link>
    </div>
  )
}

export default Item