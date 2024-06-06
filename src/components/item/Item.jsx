import { Button } from "@nextui-org/react"

const Item = ({id, title, price, category, description, image}) => {
  return (
    <div className="p-5 py-10 bg-teal-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer font-ubuntu">
      <img src={image} alt=""/>
      <h3 className="text-xl my-5">{title}</h3>
      <h4 className="font-semibold mb-5">${price}</h4>
      <Button className="p-2 px-6 bg-teal-500 text-white rounded-md hover:bg-teal-600">Ver Detalles</Button>
    </div>
  )
}

export default Item