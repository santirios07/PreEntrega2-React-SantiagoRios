import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/itemdetail/ItemDetail'
import { CircularProgress } from '@nextui-org/react'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const {idProduct} = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idProduct}`)
            .then(res=>res.json())
            .then(res =>setProduct(res))
            .catch(error => console.error(error))
    },[idProduct])


  return (
    <>
        {product ? <ItemDetail detail={product} /> : <div className='flex justify-center '><CircularProgress size="md" aria-label="Loading..."/></div>}
    </>
  )
}

export default ItemDetailContainer